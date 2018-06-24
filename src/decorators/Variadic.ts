import {
  StringVariadicArgumentsModel, StringVariadicArgumentsModelOptions
} from '../attribute_models/string_variadic_arguments_model';
import { ContextSpec } from '../classes/ContextSpec';
import { UnknownAttributeTypeError } from '../errors';
import { ClassDecoratorTargetType, ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export interface VariadicOptions {
  min?: number;
  type?: any;
}

const addString = (contextSpec: ContextSpec, key: string, options: VariadicOptions) => {
  const modelOptions: StringVariadicArgumentsModelOptions = {};
  Object.assign(modelOptions, options);
  const model = new StringVariadicArgumentsModel(key, modelOptions);
  contextSpec.setVariadicArgumentsModel(model);
};

export function Variadic(options?: VariadicOptions) {
  return (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor) => {
    const contextSpec = WORLD.getContextSpecOfClass(target.constructor as ContextClassType);
    // tslint:disable-next-line:no-parameter-reassignment
    options = options ? options : {};
    // tslint:disable-next-line:strict-boolean-expressions
    const type = options.type || String;
    switch (type) {
      case String:
        addString(contextSpec, propertyKey, options);
        break;
      default:
        throw new UnknownAttributeTypeError(target.constructor as ClassDecoratorTargetType, propertyKey, type);
    }
  };
}
