import { RunMethod } from '../classes/RunMethod';
import { ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export function RunSync() {
  return (
    target: PropertyDecoratorTargetType,
    propertyKey: string,
    descriptor?: PropertyDescriptor //| TypedPropertyDescriptor<() => void>
  ) => {
    WORLD.getContextSpecOfClass(target.constructor as ContextClassType).setRunSyncMethod(new RunMethod(propertyKey));
  };
}
