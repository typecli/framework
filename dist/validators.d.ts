import { AttributeModel_parsedValueIsMissing } from './classes/attribute_model/interfaces';
import { ArgumentModelType, OptionModelType } from './classes/AttributeModel';
import { Parser } from './classes/Parser';
export declare function validateArgumentRequired(parser: Parser, model: ArgumentModelType & AttributeModel_parsedValueIsMissing): void;
export declare function validateOptionRequired(parser: Parser, model: OptionModelType & AttributeModel_parsedValueIsMissing): void;
