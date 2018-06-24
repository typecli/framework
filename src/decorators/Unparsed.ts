import { TerminatorModel, TerminatorModelOptions } from '../attribute_models/terminator_model';
import { ContextSpec } from '../classes/ContextSpec';
import { ContextClassType, PropertyDecoratorTargetType } from '../types';
import { WORLD } from '../world';

// tslint:disable-next-line:no-empty-interface
export interface UnparsedOptions {}

const add = (contextSpec: ContextSpec, key: string, keywords: string[], options: UnparsedOptions) => {
  const modelOptions: TerminatorModelOptions = {};
  Object.assign(modelOptions, options);
  const model = new TerminatorModel(key, keywords, modelOptions);
  contextSpec.setTerminatorModel(model);
};

export function Unparsed(keywords: string[], options?: UnparsedOptions) {
  return (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor) => {
    const contextSpec = WORLD.getContextSpecOfClass(target.constructor as ContextClassType);
    // tslint:disable-next-line:no-parameter-reassignment
    options = options ? options : {};
    add(contextSpec, propertyKey, keywords, options);
  };
}
