import { DateArgumentModel, DateArgumentModelOptions } from '../attribute_models/date_argument_model';
import { StringArgumentModel, StringArgumentModelOptions } from '../attribute_models/string_argument_model';
import { ContextSpec } from '../classes/ContextSpec';
import { UnknownAttributeTypeError } from '../errors';
import { getDesignTypeMetadata } from '../functions/getDesignTypeMetadata';
import { ClassDecoratorTargetType, ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export interface ArgumentOptions {
  desc?: string;
  required?: boolean;
  type?: any;
  variableName?: string;
}

const addString = (contextSpec: ContextSpec, key: string, options: ArgumentOptions) => {
  const modelOptions: StringArgumentModelOptions = {};
  Object.assign(modelOptions, options);
  const model = new StringArgumentModel(key, modelOptions);
  contextSpec.setArgumentModel(model);
};

const addDate = (contextSpec: ContextSpec, key: string, options: ArgumentOptions) => {
  const modelOptions: DateArgumentModelOptions = {};
  Object.assign(modelOptions, options);
  const model = new DateArgumentModel(key, modelOptions);
  contextSpec.setArgumentModel(model);
};

export function Argument(options?: ArgumentOptions) {
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
      case Date:
        addDate(contextSpec, propertyKey, options);
        break;
      default:
        throw new UnknownAttributeTypeError(target.constructor as ClassDecoratorTargetType, propertyKey, type);
    }
  };
}
