import { RunSpace, RunSpaceOptions } from '../classes/RunSpace';
import { ContextClassType } from '../types';

export async function run(contextClass: ContextClassType, args?: string[], spaceOptions?: RunSpaceOptions) {
  const space = new RunSpace(spaceOptions ? spaceOptions : {});
  return space.run(contextClass, args ? args : []);
}
