import { Parser } from '../Parser';

export type AttributeModel_extractArgumentAndStore = {
  extractArgumentAndStore(parser: Parser): number;
};

export type AttributeModel_extractOptionAndStore = {
  extractOptionAndStore(parser: Parser, name: string): number;
};

export type AttributeModel_hasOptionParameter = {
  hasOptionParameter: boolean;
};

export type AttributeModel_terminatorKeywordMatches = {
  terminatorKeywordMatches(word: string): boolean;
};

export type AttributeModel_terminatorKeywords = {
  terminatorKeywords: string[];
};

export type AttributeModel_optionNameMatches = {
  optionNameMatches(name: string): boolean;
};

export type AttributeModel_parsedValueIsMissing = {
  parsedValueIsMissing(parser: Parser): boolean;
};

export type AttributeModel_defaultValue = {
  defaultValue: unknown;
};

export type AttributeModel_description = {
  description: string | undefined;
};

export type AttributeModel_minimumElementCount = {
  minimumElementCount: number | undefined;
};

export type AttributeModel_arrayOptionNames = {
  optionNames: string[];
};

export type AttributeModel_optionNames = {
  optionNames: string[];
};

export type AttributeModel_variableName = {
  variableName: string;
};
