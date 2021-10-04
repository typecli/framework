import { ClassDecoratorTargetType, ContextClassType } from '../types';
import { WORLD } from '../world';

export function IncludeSyntax(klass: ContextClassType) {
  return <T extends ClassDecoratorTargetType>(constructor: T): T => {
    const source = WORLD.getContextSpecOfClass(klass);
    const target = WORLD.getContextSpecOfClass(constructor as ContextClassType);
    source.arguments.forEach((e) => {
      target.setArgumentModel(e);
    });
    source.options.forEach((e) => {
      target.setOptionModel(e);
    });
    return constructor;
  };
}
