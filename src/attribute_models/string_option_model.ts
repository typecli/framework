import { Mixin } from '@typescript-plus/mixin-decorator';
import { UndefinedOptionValueError } from '../';
import { AttributeModel_defaultValue, AttributeModel_description } from '../classes/attribute_model/mixins';
import { AttributeModel, AttributeModel_optionNames, OptionModelType } from '../classes/AttributeModel';
import {
  AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_name, AttributeModelOptions_required
} from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
import { ATTRIBUTE_PARSER_EVENT } from '../events';
import { validateOptionRequired } from '../validators';

export interface StringOptionModelOptions
  extends AttributeModelOptions_default,
    AttributeModelOptions_desc,
    AttributeModelOptions_required,
    AttributeModelOptions_name {}

const STRING_OPTION_PARSER_EVENTS = new AttributeParserEventEmitter<StringOptionModel>();
STRING_OPTION_PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.VALIDATE, event => {
  if (event.model.options.required) {
    validateOptionRequired(event.parser, event.model);
  }
});

@Mixin(AttributeModel_defaultValue)
@Mixin(AttributeModel_description)
@Mixin(AttributeModel_optionNames)
export class StringOptionModel extends AttributeModel implements OptionModelType {
  classEvents: AttributeParserEventEmitter<StringOptionModel> = STRING_OPTION_PARSER_EVENTS;
  defaultValue: any;
  description: string | undefined;
  events = new AttributeParserEventEmitter();
  hasOptionParameter = true;
  optionNames!: string[];

  constructor(key: string, public options: StringOptionModelOptions) {
    super(key);
  }

  extractOptionAndStore(parser: Parser, name: string): number {
    // tslint:disable-next-line:no-magic-numbers
    if (parser.cursor.left < 2) {
      throw new UndefinedOptionValueError(parser, this, name);
    }
    parser.context[this.key] = parser.cursor.at(1) as string;
    // tslint:disable-next-line:no-magic-numbers
    return 2;
  }

  optionNameMatches(name: string): boolean {
    return this.optionNames.indexOf(name) !== -1;
  }

  parsedValueIsMissing(parser: Parser) {
    return parser.context[this.key] === undefined;
  }

  // tslint:disable-next-line:no-empty
  preinitialize(parser: Parser): void {}
}
