import { ClassDecoratorTargetType, ContextClassType } from '../types';
import { WORLD } from '../world';

export function IncludeSyntax(klass: ContextClassType) {
  return <T extends ClassDecoratorTargetType>(constructor: T) => {
    // tslint:disable-next-line:no-parameter-reassignment
    const source = WORLD.getContextSpecOfClass(klass);
    const target = WORLD.getContextSpecOfClass(constructor as ContextClassType);
    source.arguments.forEach(e => {
      target.setArgumentModel(e);
    });
    source.options.forEach(e => {
      target.setOptionModel(e);
    });
    return constructor;
  };
}
