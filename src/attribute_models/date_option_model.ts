import { Mixin } from '@typescript-plus/mixin-decorator';
import { UndefinedOptionValueError } from '../';
import { AttributeModel_defaultValue } from '../classes/attribute_model/mixins';
import { AttributeModel, AttributeModel_optionNames, OptionModelType } from '../classes/AttributeModel';
import {
  AttributeModelOptions_default,
  AttributeModelOptions_desc,
  AttributeModelOptions_name,
} from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';

const PARSER_EVENTS = new AttributeParserEventEmitter<DateOptionModel>();
// DATE_ARGUMENT_PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.VALIDATE, event => {
//   if (event.model.options.required) {
//     validateAttributeRequired(event.model, event.parser);
//   }
// });

export interface DateOptionModelOptions
  extends AttributeModelOptions_default,
    AttributeModelOptions_desc,
    AttributeModelOptions_name {}

@Mixin(AttributeModel_defaultValue)
@Mixin(AttributeModel_optionNames)
export class DateOptionModel extends AttributeModel implements OptionModelType {
  classEvents: AttributeParserEventEmitter<DateOptionModel> = PARSER_EVENTS;
  defaultValue: unknown;
  description: string | undefined;
  events = new AttributeParserEventEmitter();
  hasOptionParameter = true;
  optionNames!: string[];

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
