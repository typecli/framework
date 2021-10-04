import { AttributeModel } from '../AttributeModel';
import {
  AttributeModel_defaultValue,
  AttributeModel_description,
  AttributeModel_extractArgumentAndStore,
  AttributeModel_extractOptionAndStore,
  AttributeModel_hasOptionParameter,
  AttributeModel_minimumElementCount,
  AttributeModel_optionNameMatches,
  AttributeModel_optionNames,
  AttributeModel_terminatorKeywordMatches,
  AttributeModel_terminatorKeywords,
  AttributeModel_variableName,
} from './member_types';

export type ArgumentModelType = AttributeModel &
  AttributeModel_defaultValue &
  AttributeModel_description &
  AttributeModel_extractArgumentAndStore &
  AttributeModel_variableName;

export type OptionModelType = AttributeModel &
  AttributeModel_defaultValue &
  AttributeModel_description &
  AttributeModel_hasOptionParameter &
  AttributeModel_extractOptionAndStore &
  AttributeModel_optionNames &
  AttributeModel_optionNameMatches;

export type OptionArrayModelType = AttributeModel &
  AttributeModel_description &
  AttributeModel_extractOptionAndStore &
  AttributeModel_hasOptionParameter &
  AttributeModel_optionNames &
  AttributeModel_optionNameMatches;

export type TerminatorModelType = AttributeModel &
  AttributeModel_terminatorKeywordMatches &
  AttributeModel_terminatorKeywords;

export type VariadicArgumentsModelType = AttributeModel &
  AttributeModel_extractArgumentAndStore &
  AttributeModel_minimumElementCount;
