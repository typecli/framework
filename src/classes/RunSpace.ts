import { Exit } from '../errors/Exit';
import { NotSynchronousRunnerMethodError } from '../errors/NotSynchronousRunnerMethodError';
import { parseSync } from '../functions/parseSync';
import { ContextClassType } from '../types';
import { WORLD } from '../world';
import { ContextSpec } from './ContextSpec';

export class RunSpace {
  constructor(public options: RunSpaceOptions) {}

  get throwsOnExit(): boolean {
    return this.options.throwOnExit === true;
  }

  exit(status = 0): void {
    if (this.throwsOnExit) {
      throw new Exit(status);
    } else {
      process.exit(status);
    }
  }

  async run(contextClass: ContextClassType, args: string[]): Promise<void> {
    WORLD.runSpaces.push(this);
    return this._run(WORLD.getContextSpecOfClass(contextClass), args)
      .then(() => {
        WORLD.runSpaces.pop();
      })
      .catch((err) => {
        WORLD.runSpaces.pop();
        throw err;
      });
  }

  runSync(contextClass: ContextClassType, args: string[]): void {
    WORLD.runSpaces.push(this);
    try {
      this._runSync(WORLD.getContextSpecOfClass(contextClass), args);
      WORLD.runSpaces.pop();
    } catch (err) {
      WORLD.runSpaces.pop();
      throw err;
    }
  }

  private async _run(contextSpec: ContextSpec, args: string[]): Promise<void> {
    const context = contextSpec.createInstance() as { [key: string]: () => unknown };
    const parser = parseSync(context, args);
    const runMethod = contextSpec.runMethod;
    if (runMethod) {
      const runResult = context[runMethod.key]();
      if (runResult !== undefined && typeof (runResult as { then?: unknown }).then === 'function') {
        return runResult as Promise<void>;
      }
      return Promise.resolve();
    }
    const subcontextSpec = parser.subcontextSpec;
    if (subcontextSpec) {
      return this._run(subcontextSpec, parser.cursor.slice());
    }
    return Promise.resolve();
  }

  private _runSync(contextSpec: ContextSpec, args: string[]): void {
    const context = contextSpec.createInstance() as { [key: string]: () => unknown };
    const parser = parseSync(context, args);
    const runMethod = contextSpec.runMethod;
    if (runMethod) {
      const runResult = context[runMethod.key]();
      if (runResult !== undefined && typeof (runResult as { then?: unknown }).then === 'function') {
        throw new NotSynchronousRunnerMethodError();
      }
      return;
    }
    const subcontextSpec = parser.subcontextSpec;
    if (subcontextSpec) {
      this._runSync(subcontextSpec, parser.cursor.slice());
    }
  }
}

export interface RunSpaceOptions {
  throwOnExit?: boolean;
}
