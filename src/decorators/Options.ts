import { StringOptionArrayModel, StringOptionArrayModelOptions } from '../attribute_models/string_option_array_model';
import { ContextSpec } from '../classes/ContextSpec';
import { UnknownAttributeTypeError } from '../errors';
import { ClassDecoratorTargetType, ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export interface OptionsOptions {
  names?: string[];
  required?: boolean;
  type?: unknown;
}

const addString = (contextSpec: ContextSpec, key: string, options: OptionsOptions) => {
  const modelOptions: StringOptionArrayModelOptions = {};
  Object.assign(modelOptions, options);
  const model = new StringOptionArrayModel(key, modelOptions);
  contextSpec.setOptionModel(model);
};

export function Options(type: unknown, options?: OptionsOptions) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor): void => {
    const contextSpec = WORLD.getContextSpecOfClass(target.constructor as ContextClassType);
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
