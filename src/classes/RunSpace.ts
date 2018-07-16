import { Exit } from '../errors/Exit';
import { parseSync } from '../functions/parseSync';
import { ContextClassType } from '../types';
import { WORLD } from '../world';
import { ContextSpec } from './ContextSpec';

export class RunSpace {
  constructor(public options: RunSpaceOptions) {}

  get throwsOnExit() {
    return this.options.throwOnExit === true;
  }

  exit(status = 0) {
    if (this.throwsOnExit) {
      throw new Exit(status);
    } else {
      process.exit(status);
    }
  }

  async run(contextClass: ContextClassType, args: string[]) {
    WORLD.runSpaces.push(this);
    return this._run(WORLD.getContextSpecOfClass(contextClass), args)
      .then(() => {
        WORLD.runSpaces.pop();
      })
      .catch(e => {
        WORLD.runSpaces.pop();
        throw e;
      });
  }

  private async _run(contextSpec: ContextSpec, args: string[]): Promise<void> {
    const context = contextSpec.createInstance();
    const parser = parseSync(context, args);
    const runMethod = contextSpec.runMethod;
    if (runMethod) {
      const runResult = context[runMethod.key]();
      if (runResult !== undefined && typeof runResult.then === 'function') {
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
}

export interface RunSpaceOptions {
  throwOnExit?: boolean;
}
