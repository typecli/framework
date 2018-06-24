import { Mixin } from '@typescript-plus/mixin-decorator';
import { UndefinedOptionValueError } from '../';
import { AttributeModel_optionArrayNames } from '../classes/attribute_model/mixins';
import { AttributeModel, OptionArrayModelType } from '../classes/AttributeModel';
import { AttributeModelOptions_desc, AttributeModelOptions_name } from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
import { ATTRIBUTE_PARSER_EVENT } from '../events';

// tslint:disable-next-line:no-empty-interface
export interface StringOptionArrayModelOptions extends AttributeModelOptions_desc, AttributeModelOptions_name {}

const STRING_OPTION_ARRAY_PARSER_EVENTS = new AttributeParserEventEmitter<StringOptionArrayModel>();
STRING_OPTION_ARRAY_PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.INITIALIZE, event => {
  event.parser.context[event.model.key] = [];
});

@Mixin(AttributeModel_optionArrayNames)
export class StringOptionArrayModel extends AttributeModel implements OptionArrayModelType {
  classEvents: AttributeParserEventEmitter<StringOptionArrayModel> = STRING_OPTION_ARRAY_PARSER_EVENTS;
  description: string | undefined;
  events = new AttributeParserEventEmitter();
  hasOptionParameter = true;
  optionNames!: string[];

  constructor(key: string, public options: StringOptionArrayModelOptions) {
    super(key);
  }

  extractOptionAndStore(parser: Parser, name: string): number {
    // tslint:disable-next-line:no-magic-numbers
    if (parser.cursor.left < 2) {
      throw new UndefinedOptionValueError(parser, this, name);
    }
    (parser.context[this.key] as string[]).push(parser.cursor.at(1) as string);
    // tslint:disable-next-line:no-magic-numbers
    return 2;
  }

  optionNameMatches(name: string): boolean {
    return this.optionNames.indexOf(name) !== -1;
  }

  // tslint:disable-next-line:no-empty
  preinitialize(parser: Parser): void {}
}
