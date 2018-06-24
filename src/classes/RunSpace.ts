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

  run(contextClass: ContextClassType, args: string[]) {
    WORLD.runSpaces.push(this);
    this._run(WORLD.getContextSpecOfClass(contextClass), args);
  }

  runSync(contextClass: ContextClassType, args: string[]) {
    WORLD.runSpaces.push(this);
    this._run(WORLD.getContextSpecOfClass(contextClass), args);
  }

  private _run(contextSpec: ContextSpec, args: string[]) {
    const context = contextSpec.createInstance();
    const parser = parseSync(context, args);
    const runMethod = contextSpec.runMethod;
    if (runMethod) {
      return context[runMethod.key]();
    }
    const subcontextSpec = parser.subcontextSpec;
    if (subcontextSpec) {
      this._run(subcontextSpec, parser.cursor.slice());
    }
  }
}

export interface RunSpaceOptions {
  throwOnExit?: boolean;
}
