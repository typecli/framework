import { RunMethod } from '../classes/RunMethod';
import { ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export function Run() {
  return (
    target: PropertyDecoratorTargetType,
    propertyKey: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    descriptor?: PropertyDescriptor //| TypedPropertyDescriptor<() => void>
  ): void => {
    WORLD.getContextSpecOfClass(target.constructor as ContextClassType).setRunMethod(new RunMethod(propertyKey));
  };
}
