import { Memoize } from '@typescript-plus/fast-memoize-decorator';
import { kebab } from 'case';
import { ATTRIBUTE_PARSER_EVENT } from '../events';
import {
  AttributeModel_extractArgumentAndStore, AttributeModel_extractOptionAndStore, AttributeModel_hasOptionParameter,
  AttributeModel_optionNameMatches, AttributeModel_terminatorKeywordMatches, AttributeModel_terminatorKeywords
} from './attribute_model/interfaces';
import {
  AttributeModel_defaultValue, AttributeModel_description, AttributeModel_minimumElementCount,
  AttributeModel_variableName
} from './attribute_model/mixins';
import { AttributeModelOptions, AttributeModelOptions_name } from './AttributeModelOptions';
import { AttributeParserEvent } from './Event';
import { AttributeParserEventEmitter } from './EventEmitter';
import { Parser } from './Parser';

// tslint:disable:max-classes-per-file

export abstract class AttributeModel {
  abstract classEvents: AttributeParserEventEmitter<AttributeModel>;
  abstract events: AttributeParserEventEmitter<AttributeModel>;
  abstract options: AttributeModelOptions;

  constructor(public key: string) {}

  emitParserEvent(event: ATTRIBUTE_PARSER_EVENT, parser: Parser, ...args: any[]) {
    [this.events, this.classEvents].forEach(events => {
      events.emit(new AttributeParserEvent(event, this, parser));
    });
  }

  abstract preinitialize(parser: Parser): void;
}

// tslint:disable-next-line:class-name
export abstract class AttributeModel_optionNames {
  abstract key: string;
  abstract options: AttributeModelOptions_name;

  @Memoize()
  get optionNames() {
    const names = this.options.name;
    if (Array.isArray(names)) {
      return names;
    }
    if (names !== undefined) {
      return [names];
    }
    const name = this.key;
    return [name.length === 1 ? `-${name}` : `--${kebab(name)}`];
  }
}

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
