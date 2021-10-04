import { AttributeModel_parsedValueIsMissing } from './classes/attribute_model/member_types';
import { ArgumentModelType, OptionModelType } from './classes/attribute_model/types';
import { Parser } from './classes/Parser';
import { MissingArgumentError, MissingOptionError } from './errors';

export function validateArgumentRequired(
  parser: Parser,
  model: ArgumentModelType & AttributeModel_parsedValueIsMissing
): void {
  if (model.parsedValueIsMissing(parser)) {
    throw new MissingArgumentError(parser, model);
  }
}

export function validateOptionRequired(
  parser: Parser,
  model: OptionModelType & AttributeModel_parsedValueIsMissing
): void {
  if (model.parsedValueIsMissing(parser)) {
    throw new MissingOptionError(parser, model);
  }
}
