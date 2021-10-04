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
  AttributeModelOption_required,
} from '../attribute_model/option_member_types';
import { AttributeParserEventEmitter } from '../EventEmitter';
import { Parser } from '../Parser';
import { ATTRIBUTE_PARSER_EVENT } from '../../events';
import { validateOptionRequired } from '../../validators';

export type StringOptionModelOptions = AttributeModelOption_default &
  AttributeModelOption_desc &
  AttributeModelOption_required &
  AttributeModelOption_name;

const PARSER_EVENTS = new AttributeParserEventEmitter<StringOptionModel>();
PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.INITIALIZE, (event) => {
  event.parser.context[event.model.key] = event.model.defaultValue;
}).on(ATTRIBUTE_PARSER_EVENT.VALIDATE, (event) => {
  if (event.model.options.required) {
    validateOptionRequired(event.parser, event.model);
  }
});

export class StringOptionModel extends AttributeModelMixin_defaultValue(
  AttributeModelMixin_description(AttributeModelMixin_optionNames(AttributeModel))
) {
  classEvents: AttributeParserEventEmitter<StringOptionModel> = PARSER_EVENTS;
  events = new AttributeParserEventEmitter();
  hasOptionParameter = true;

  constructor(key: string, public options: StringOptionModelOptions) {
    super(key);
  }

  extractOptionAndStore(parser: Parser, name: string): number {
    if (parser.cursor.left < 2) {
      throw new UndefinedOptionValueError(parser, this, name);
    }
    parser.context[this.key] = parser.cursor.at(1) as string;
    return 2;
  }

  optionNameMatches(name: string): boolean {
    return this.optionNames.indexOf(name) !== -1;
  }

  parsedValueIsMissing(parser: Parser): boolean {
    return parser.context[this.key] === undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  preinitialize(parser: Parser): void {}
}
