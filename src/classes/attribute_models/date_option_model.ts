import { UndefinedOptionValueError } from '../..';
import {
  AttributeModelMixin_defaultValue,
  AttributeModelMixin_description,
  AttributeModelMixin_optionNames,
} from '../attribute_model/mixins';
import { AttributeModel } from '../AttributeModel';
import {
  AttributeModelOption_default,
  AttributeModelOption_desc,
  AttributeModelOption_name,
} from '../attribute_model/option_member_types';
import { AttributeParserEventEmitter } from '../EventEmitter';
import { Parser } from '../Parser';

const PARSER_EVENTS = new AttributeParserEventEmitter<DateOptionModel>();
// DATE_ARGUMENT_PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.VALIDATE, event => {
//   if (event.model.options.required) {
//     validateAttributeRequired(event.model, event.parser);
//   }
// });

export type DateOptionModelOptions = AttributeModelOption_default &
  AttributeModelOption_desc &
  AttributeModelOption_name;

export class DateOptionModel extends AttributeModelMixin_defaultValue(
  AttributeModelMixin_description(AttributeModelMixin_optionNames(AttributeModel))
) {
  classEvents: AttributeParserEventEmitter<DateOptionModel> = PARSER_EVENTS;
  events = new AttributeParserEventEmitter();
  hasOptionParameter = true;

  constructor(key: string, public options: DateOptionModelOptions) {
    super(key);
  }

  extractOptionAndStore(parser: Parser, name: string): number {
    if (parser.cursor.left < 2) {
      throw new UndefinedOptionValueError(parser, this, name);
    }
    parser.context[this.key] = new Date(parser.cursor.at(1) as string);
    return 2;
  }

  optionNameMatches(name: string): boolean {
    return this.optionNames.indexOf(name) !== -1;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  preinitialize(parser: Parser): void {}
}
