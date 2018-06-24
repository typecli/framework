import { Parser } from '../Parser';

// tslint:disable-next-line:class-name
export interface AttributeModel_extractArgumentAndStore {
  extractArgumentAndStore(parser: Parser): number;
}

// tslint:disable-next-line:class-name
export interface AttributeModel_extractOptionAndStore {
  extractOptionAndStore(parser: Parser, name: string): number;
}

// tslint:disable-next-line:class-name
export interface AttributeModel_hasOptionParameter {
  hasOptionParameter: boolean;
}

// tslint:disable-next-line:class-name
export interface AttributeModel_terminatorKeywordMatches {
  terminatorKeywordMatches(word: string): boolean;
}

// tslint:disable-next-line:class-name
export interface AttributeModel_terminatorKeywords {
  terminatorKeywords: string[];
}

// tslint:disable-next-line:class-name
export interface AttributeModel_optionNameMatches {
  optionNameMatches(name: string): boolean;
}

// tslint:disable-next-line:class-name
export interface AttributeModel_parsedValueIsMissing {
  parsedValueIsMissing(parser: Parser): boolean;
}
