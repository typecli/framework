import { ClassDecoratorTargetType, ContextClassType } from '../types';
import { WORLD } from '../world';

export function Sub(klass: ContextClassType) {
  return <T extends ClassDecoratorTargetType>(constructor: T) => {
    WORLD.getContextSpecOfClass(constructor).addSubspec(WORLD.getContextSpecOfClass(klass));
    return constructor;
  };
}
