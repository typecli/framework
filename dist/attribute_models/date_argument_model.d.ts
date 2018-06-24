import { ArgumentModelType, AttributeModel } from '../classes/AttributeModel';
import { AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_required, AttributeModelOptions_variableName } from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
export interface DateArgumentModelOptions extends AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_required, AttributeModelOptions_variableName {
}
export declare class DateArgumentModel extends AttributeModel implements ArgumentModelType {
    options: DateArgumentModelOptions;
    classEvents: AttributeParserEventEmitter<DateArgumentModel>;
    defaultValue: any;
    description: string | undefined;
    events: AttributeParserEventEmitter<AttributeModel>;
    variableName: string;
    constructor(key: string, options: DateArgumentModelOptions);
    extractArgumentAndStore(parser: Parser): number;
    parsedValueIsMissing(parser: Parser): boolean;
    preinitialize(parser: Parser): void;
}
