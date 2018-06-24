import { AttributeModel_parsedValueIsMissing } from './classes/attribute_model/interfaces';
import { AttributeModel } from './classes/AttributeModel';
import { Parser } from './classes/Parser';
import { MissingAttributeError } from './errors';

export const validateAttributeRequired = (
  parser: Parser,
  model: AttributeModel & AttributeModel_parsedValueIsMissing
) => {
  if (model.parsedValueIsMissing(parser)) {
    throw new MissingAttributeError(parser, model);
  }
};
