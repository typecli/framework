import { RunSpace, RunSpaceOptions } from '../classes/RunSpace';
import { ContextClassType } from '../types';

export function runSync(contextClass: ContextClassType, args?: string[], spaceOptions?: RunSpaceOptions): void {
  const space = new RunSpace(spaceOptions ? spaceOptions : {});
  space.runSync(contextClass, args ? args : []);
}
