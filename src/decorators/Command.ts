import { CommandData } from '../classes/CommandData';
import { ClassDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export interface CommandOptions {
  name?: string;
}

export function Command(options?: CommandOptions) {
  return <T extends ClassDecoratorTargetType>(constructor: T): T => {
    WORLD.getContextSpecOfClass(constructor).setCommandData(new CommandData(constructor, options ? options : {}));
    return constructor;
  };
}
