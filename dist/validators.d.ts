import { AttributeModel_parsedValueIsMissing } from './classes/attribute_model/interfaces';
import { AttributeModel } from './classes/AttributeModel';
import { Parser } from './classes/Parser';
export declare const validateAttributeRequired: (parser: Parser, model: AttributeModel & AttributeModel_parsedValueIsMissing) => void;
