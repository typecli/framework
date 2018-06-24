import { AttributeModel, OptionModelType } from '../classes/AttributeModel';
import { AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_name, AttributeModelOptions_not } from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
export interface BooleanOptionModelOptions extends AttributeModelOptions_default, AttributeModelOptions_name, AttributeModelOptions_desc, AttributeModelOptions_not {
}
export declare class BooleanOptionModel extends AttributeModel implements OptionModelType {
    options: BooleanOptionModelOptions;
    classEvents: AttributeParserEventEmitter<BooleanOptionModel>;
    defaultValue: any;
    description: string | undefined;
    events: AttributeParserEventEmitter<AttributeModel>;
    hasOptionParameter: boolean;
    optionNames: string[];
    constructor(key: string, options: BooleanOptionModelOptions);
    readonly negatedOptionNames: string[];
    extractOptionAndStore(parser: Parser, name: string): number;
    optionNameMatches(name: string): boolean;
    preinitialize(parser: Parser): void;
}
