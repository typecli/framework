import { BooleanOptionModel, BooleanOptionModelOptions } from '../classes/attribute_models/boolean_option_model';
import { DateOptionModel, DateOptionModelOptions } from '../classes/attribute_models/date_option_model';
import { StringOptionModel, StringOptionModelOptions } from '../classes/attribute_models/string_option_model';
import { ContextSpec } from '../classes/ContextSpec';
import { UnknownAttributeTypeError } from '../errors';
import { getDesignTypeMetadata } from '../functions/getDesignTypeMetadata';
import { ClassDecoratorTargetType, ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export interface OptionOptions {
  default?: unknown;
  desc?: string;
  name?: string | string[];
  not?: string | string[];
  required?: boolean;
  type?: unknown;
}

const addString = (contextSpec: ContextSpec, key: string, options: OptionOptions) => {
  const modelOptions: StringOptionModelOptions = {};
  Object.assign(modelOptions, options);
  const model = new StringOptionModel(key, modelOptions);
  contextSpec.setOptionModel(model);
};

const addBoolean = (contextSpec: ContextSpec, key: string, options: OptionOptions) => {
  const modelOptions: BooleanOptionModelOptions = {};
  Object.assign(modelOptions, options);
  const model = new BooleanOptionModel(key, modelOptions);
  contextSpec.setOptionModel(model);
};

const addDate = (contextSpec: ContextSpec, key: string, options: OptionOptions) => {
  const modelOptions: DateOptionModelOptions = {};
  Object.assign(modelOptions, options);
  const model = new DateOptionModel(key, modelOptions);
  contextSpec.setOptionModel(model);
};

export function Option(options?: OptionOptions) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor): void => {
    const contextSpec = WORLD.getContextSpecOfClass(target.constructor as ContextClassType);
    options = options ? options : {};
    const type: unknown = options.type || getDesignTypeMetadata(target, propertyKey);
    switch (type) {
      case String:
        addString(contextSpec, propertyKey, options);
        break;
      case Boolean:
        addBoolean(contextSpec, propertyKey, options);
        break;
      case Date:
        addDate(contextSpec, propertyKey, options);
        break;
      default:
        throw new UnknownAttributeTypeError(target.constructor as ClassDecoratorTargetType, propertyKey, type);
    }
  };
}
