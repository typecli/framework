import { BooleanOptionModel, BooleanOptionModelOptions } from '../attribute_models/boolean_option_model';
import { DateOptionModel, DateOptionModelOptions } from '../attribute_models/date_option_model';
import { StringOptionModel, StringOptionModelOptions } from '../attribute_models/string_option_model';
import { ContextSpec } from '../classes/ContextSpec';
import { UnknownAttributeTypeError } from '../errors';
import { getDesignTypeMetadata } from '../functions/getDesignTypeMetadata';
import { ClassDecoratorTargetType, ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export interface OptionOptions {
  default?: any;
  desc?: string;
  name?: string | string[];
  not?: string | string[];
  required?: boolean;
  type?: any;
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
  return (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor) => {
    const contextSpec = WORLD.getContextSpecOfClass(target.constructor as ContextClassType);
    // tslint:disable-next-line:no-parameter-reassignment
    options = options ? options : {};
    // tslint:disable-next-line:strict-boolean-expressions
    const type = options.type || getDesignTypeMetadata(target, propertyKey);
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
