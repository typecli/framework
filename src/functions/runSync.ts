import { RunSpace, RunSpaceOptions } from '../classes/RunSpace';
import { ContextClassType } from '../types';
import { WORLD } from '../world';

export function runSync(contextClass: ContextClassType, args?: string[], spaceOptions?: RunSpaceOptions) {
  const space = new RunSpace(spaceOptions ? spaceOptions : {});
  WORLD.runSpaces.push(space);
  try {
    space.runSync(contextClass, args ? args : []);
  } finally {
    WORLD.runSpaces.pop();
  }
}
