import { UndefinedOptionValueError } from '../..';
import { AttributeModelMixin_arrayOptionNames } from '../attribute_model/mixins';
import { AttributeModel } from '../AttributeModel';
import { AttributeModelOption_desc, AttributeModelOption_name } from '../attribute_model/option_member_types';
import { AttributeParserEventEmitter } from '../EventEmitter';
import { Parser } from '../Parser';
import { ATTRIBUTE_PARSER_EVENT } from '../../events';

export type StringOptionArrayModelOptions = AttributeModelOption_desc & AttributeModelOption_name;

const PARSER_EVENTS = new AttributeParserEventEmitter<StringOptionArrayModel>();
PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.INITIALIZE, (event) => {
  event.parser.context[event.model.key] = [];
});

export class StringOptionArrayModel extends AttributeModelMixin_arrayOptionNames(AttributeModel) {
  classEvents: AttributeParserEventEmitter<StringOptionArrayModel> = PARSER_EVENTS;
  description: string | undefined;
  events = new AttributeParserEventEmitter();
  hasOptionParameter = true;

  constructor(key: string, public options: StringOptionArrayModelOptions) {
    super(key);
  }

  extractOptionAndStore(parser: Parser, name: string): number {
    if (parser.cursor.left < 2) {
      throw new UndefinedOptionValueError(parser, this, name);
    }
    (parser.context[this.key] as string[]).push(parser.cursor.at(1) as string);
    return 2;
  }

  optionNameMatches(name: string): boolean {
    return this.optionNames.indexOf(name) !== -1;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  preinitialize(parser: Parser): void {}
}
