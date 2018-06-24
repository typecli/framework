import { AttributeModel, VariadicArgumentsModelType } from '../classes/AttributeModel';
import { AttributeModelOptions_min } from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
export interface StringVariadicArgumentsModelOptions extends AttributeModelOptions_min {
}
export declare class StringVariadicArgumentsModel extends AttributeModel implements VariadicArgumentsModelType {
    options: StringVariadicArgumentsModelOptions;
    classEvents: AttributeParserEventEmitter<StringVariadicArgumentsModel>;
    events: AttributeParserEventEmitter<AttributeModel>;
    minimumElementCount: number | undefined;
    variableName: string;
    constructor(key: string, options: StringVariadicArgumentsModelOptions);
    extractArgumentAndStore(parser: Parser): number;
    preinitialize(parser: Parser): void;
}
