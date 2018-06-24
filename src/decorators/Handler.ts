import { HandlerMethod } from '../classes/HandlerMethod';
import { ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export function Handler(fn?: () => void) {
  return (
    target: PropertyDecoratorTargetType,
    propertyKey: string,
    descriptor?: PropertyDescriptor //TypedPropertyDescriptor<() => void>
  ) => {
    // tslint:disable-next-line:no-magic-numbers
    const targetKey = propertyKey.charAt(2).toLowerCase() + propertyKey.slice(3);
    WORLD.getContextSpecOfClass(target.constructor as ContextClassType).setHandlerMethod(
      new HandlerMethod(targetKey, fn ? fn : propertyKey)
    );
  };
}
