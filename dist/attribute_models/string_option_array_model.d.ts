import { AttributeModel, OptionArrayModelType } from '../classes/AttributeModel';
import { AttributeModelOptions_desc, AttributeModelOptions_name } from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
export interface StringOptionArrayModelOptions extends AttributeModelOptions_desc, AttributeModelOptions_name {
}
export declare class StringOptionArrayModel extends AttributeModel implements OptionArrayModelType {
    options: StringOptionArrayModelOptions;
    classEvents: AttributeParserEventEmitter<StringOptionArrayModel>;
    description: string | undefined;
    events: AttributeParserEventEmitter<AttributeModel>;
    hasOptionParameter: boolean;
    optionNames: string[];
    constructor(key: string, options: StringOptionArrayModelOptions);
    extractOptionAndStore(parser: Parser, name: string): number;
    optionNameMatches(name: string): boolean;
    preinitialize(parser: Parser): void;
}
