import { ArgumentModelType, AttributeModel } from '../classes/AttributeModel';
import { AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_required, AttributeModelOptions_variableName } from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
export interface StringArgumentModelOptions extends AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_required, AttributeModelOptions_variableName {
}
export declare class StringArgumentModel extends AttributeModel implements ArgumentModelType {
    options: StringArgumentModelOptions;
    classEvents: AttributeParserEventEmitter<StringArgumentModel>;
    defaultValue: any;
    description: string | undefined;
    events: AttributeParserEventEmitter<AttributeModel>;
    variableName: string;
    constructor(key: string, options: StringArgumentModelOptions);
    extractArgumentAndStore(parser: Parser): number;
    parsedValueIsMissing(parser: Parser): boolean;
    preinitialize(parser: Parser): void;
}
