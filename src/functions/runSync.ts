import { RunSpaceOptions } from '../classes/RunSpace';
import { ContextClassType } from '../types';
import { run } from './run';

export function runSync(contextClass: ContextClassType, args?: string[], spaceOptions?: RunSpaceOptions) {
  // tslint:disable-next-line:no-floating-promises
  (async () => {
    await run(contextClass, args, spaceOptions);
  })();
}
