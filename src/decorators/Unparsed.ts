import { TerminatorModel, TerminatorModelOptions } from '../attribute_models/terminator_model';
import { ContextSpec } from '../classes/ContextSpec';
import { ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UnparsedOptions {}

const add = (contextSpec: ContextSpec, key: string, keywords: string[], options: UnparsedOptions) => {
  const modelOptions: TerminatorModelOptions = {};
  Object.assign(modelOptions, options);
  const model = new TerminatorModel(key, keywords, modelOptions);
  contextSpec.setTerminatorModel(model);
};

export function Unparsed(keywords: string[], options?: UnparsedOptions) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor): void => {
    const contextSpec = WORLD.getContextSpecOfClass(target.constructor as ContextClassType);
    options = options ? options : {};
    add(contextSpec, propertyKey, keywords, options);
  };
}
