import { StringOptionArrayModel, StringOptionArrayModelOptions } from '../attribute_models/string_option_array_model';
import { ContextSpec } from '../classes/ContextSpec';
import { UnknownAttributeTypeError } from '../errors';
import { ClassDecoratorTargetType, ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export interface OptionsOptions {
  names?: string[];
  required?: boolean;
  type?: any;
}

const addString = (contextSpec: ContextSpec, key: string, options: OptionsOptions) => {
  const modelOptions: StringOptionArrayModelOptions = {};
  Object.assign(modelOptions, options);
  const model = new StringOptionArrayModel(key, modelOptions);
  contextSpec.setOptionModel(model);
};

export function Options(type: any, options?: OptionsOptions) {
  return (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor) => {
    const contextSpec = WORLD.getContextSpecOfClass(target.constructor as ContextClassType);
    // tslint:disable-next-line:no-parameter-reassignment
    options = options ? options : {};
    switch (type) {
      case String:
        addString(contextSpec, propertyKey, options);
        break;
      default:
        throw new UnknownAttributeTypeError(target.constructor as ClassDecoratorTargetType, propertyKey, type);
    }
  };
}
