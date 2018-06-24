import { RunMethod } from '../classes/RunMethod';
import { ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export function Run() {
  return (
    target: PropertyDecoratorTargetType,
    propertyKey: string,
    descriptor?: PropertyDescriptor //| TypedPropertyDescriptor<() => void>
  ) => {
    WORLD.getContextSpecOfClass(target.constructor as ContextClassType).setRunMethod(new RunMethod(propertyKey));
  };
}
