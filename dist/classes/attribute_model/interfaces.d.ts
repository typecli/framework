import { Parser } from '../Parser';
export interface AttributeModel_extractArgumentAndStore {
    extractArgumentAndStore(parser: Parser): number;
}
export interface AttributeModel_extractOptionAndStore {
    extractOptionAndStore(parser: Parser, name: string): number;
}
export interface AttributeModel_hasOptionParameter {
    hasOptionParameter: boolean;
}
export interface AttributeModel_terminatorKeywordMatches {
    terminatorKeywordMatches(word: string): boolean;
}
export interface AttributeModel_terminatorKeywords {
    terminatorKeywords: string[];
}
export interface AttributeModel_optionNameMatches {
    optionNameMatches(name: string): boolean;
}
export interface AttributeModel_parsedValueIsMissing {
    parsedValueIsMissing(parser: Parser): boolean;
}
