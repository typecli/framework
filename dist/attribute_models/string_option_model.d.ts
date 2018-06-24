import { AttributeModel, OptionModelType } from '../classes/AttributeModel';
import { AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_name, AttributeModelOptions_required } from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
export interface StringOptionModelOptions extends AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_required, AttributeModelOptions_name {
}
export declare class StringOptionModel extends AttributeModel implements OptionModelType {
    options: StringOptionModelOptions;
    classEvents: AttributeParserEventEmitter<StringOptionModel>;
    defaultValue: any;
    description: string | undefined;
    events: AttributeParserEventEmitter<AttributeModel>;
    hasOptionParameter: boolean;
    optionNames: string[];
    constructor(key: string, options: StringOptionModelOptions);
    extractOptionAndStore(parser: Parser, name: string): number;
    optionNameMatches(name: string): boolean;
    parsedValueIsMissing(parser: Parser): boolean;
    preinitialize(parser: Parser): void;
}
