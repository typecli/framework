import { AttributeModel, OptionModelType } from '../classes/AttributeModel';
import { AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_name } from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
export interface DateOptionModelOptions extends AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_name {
}
export declare class DateOptionModel extends AttributeModel implements OptionModelType {
    options: DateOptionModelOptions;
    classEvents: AttributeParserEventEmitter<DateOptionModel>;
    defaultValue: any;
    description: string | undefined;
    events: AttributeParserEventEmitter<AttributeModel>;
    hasOptionParameter: boolean;
    optionNames: string[];
    constructor(key: string, options: DateOptionModelOptions);
    extractOptionAndStore(parser: Parser, name: string): number;
    optionNameMatches(name: string): boolean;
    preinitialize(parser: Parser): void;
}
