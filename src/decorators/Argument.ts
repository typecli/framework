import { DateArgumentModel, DateArgumentModelOptions } from '../classes/attribute_models/date_argument_model';
import { StringArgumentModel, StringArgumentModelOptions } from '../classes/attribute_models/string_argument_model';
import { ContextSpec } from '../classes/ContextSpec';
import { UnknownAttributeTypeError } from '../errors';
import { getDesignTypeMetadata } from '../functions/getDesignTypeMetadata';
import { ClassDecoratorTargetType, ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

export interface ArgumentOptions {
  desc?: string;
  required?: boolean;
  type?: unknown;
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor): void => {
    const contextSpec = WORLD.getContextSpecOfClass(target.constructor as ContextClassType);
    options = options ? options : {};
    const type: unknown = options.type || getDesignTypeMetadata(target, propertyKey);
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
