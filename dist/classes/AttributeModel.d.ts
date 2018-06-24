import { ATTRIBUTE_PARSER_EVENT } from '../events';
import { AttributeModel_extractArgumentAndStore, AttributeModel_extractOptionAndStore, AttributeModel_hasOptionParameter, AttributeModel_optionNameMatches, AttributeModel_terminatorKeywordMatches, AttributeModel_terminatorKeywords } from './attribute_model/interfaces';
import { AttributeModel_defaultValue, AttributeModel_description, AttributeModel_minimumElementCount, AttributeModel_variableName } from './attribute_model/mixins';
import { AttributeModelOptions, AttributeModelOptions_name } from './AttributeModelOptions';
import { AttributeParserEventEmitter } from './EventEmitter';
import { Parser } from './Parser';
export declare abstract class AttributeModel {
    key: string;
    abstract classEvents: AttributeParserEventEmitter<AttributeModel>;
    abstract events: AttributeParserEventEmitter<AttributeModel>;
    abstract options: AttributeModelOptions;
    constructor(key: string);
    emitParserEvent(event: ATTRIBUTE_PARSER_EVENT, parser: Parser, ...args: any[]): void;
    abstract preinitialize(parser: Parser): void;
}
export declare abstract class AttributeModel_optionNames {
    abstract key: string;
    abstract options: AttributeModelOptions_name;
    readonly optionNames: string[];
}
export declare type ArgumentModelType = AttributeModel & AttributeModel_defaultValue & AttributeModel_description & AttributeModel_extractArgumentAndStore & AttributeModel_variableName;
export declare type OptionModelType = AttributeModel & AttributeModel_defaultValue & AttributeModel_description & AttributeModel_hasOptionParameter & AttributeModel_extractOptionAndStore & AttributeModel_optionNames & AttributeModel_optionNameMatches;
export declare type OptionArrayModelType = AttributeModel & AttributeModel_description & AttributeModel_extractOptionAndStore & AttributeModel_hasOptionParameter & AttributeModel_optionNames & AttributeModel_optionNameMatches;
export declare type TerminatorModelType = AttributeModel & AttributeModel_terminatorKeywordMatches & AttributeModel_terminatorKeywords;
export declare type VariadicArgumentsModelType = AttributeModel & AttributeModel_extractArgumentAndStore & AttributeModel_minimumElementCount;
