import { HelpData } from '../classes/HelpData';
import { ClassDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export interface HelpOptions {
  caption?: string;
  footer?: string;
  header?: string;
}

export function Help(options?: HelpOptions) {
  return <T extends ClassDecoratorTargetType>(constructor: T): T => {
    WORLD.getContextSpecOfClass(constructor).setHelpData(new HelpData(constructor, options ? options : {}));
    return constructor;
  };
}
