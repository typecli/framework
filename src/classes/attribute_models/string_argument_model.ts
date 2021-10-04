import {
  AttributeModelMixin_defaultValue,
  AttributeModelMixin_description,
  AttributeModelMixin_variableName,
} from '../attribute_model/mixins';
import { AttributeModel } from '../AttributeModel';
import {
  AttributeModelOption_default,
  AttributeModelOption_desc,
  AttributeModelOption_required,
  AttributeModelOption_variableName,
} from '../attribute_model/option_member_types';
import { AttributeParserEventEmitter } from '../EventEmitter';
import { Parser } from '../Parser';
import { ATTRIBUTE_PARSER_EVENT } from '../../events';
import { validateArgumentRequired } from '../../validators';

export type StringArgumentModelOptions = AttributeModelOption_default &
  AttributeModelOption_desc &
  AttributeModelOption_required &
  AttributeModelOption_variableName;

const PARSER_EVENTS = new AttributeParserEventEmitter<StringArgumentModel>();
PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.INITIALIZE, (event) => {
  event.parser.context[event.model.key] = event.model.defaultValue;
}).on(ATTRIBUTE_PARSER_EVENT.VALIDATE, (event) => {
  if (event.model.options.required) {
    validateArgumentRequired(event.parser, event.model);
  }
});

export class StringArgumentModel extends AttributeModelMixin_defaultValue(
  AttributeModelMixin_description(AttributeModelMixin_variableName(AttributeModel))
) {
  classEvents: AttributeParserEventEmitter<StringArgumentModel> = PARSER_EVENTS;
  events = new AttributeParserEventEmitter();

  constructor(key: string, public options: StringArgumentModelOptions) {
    super(key);
  }

  extractArgumentAndStore(parser: Parser): number {
    parser.context[this.key] = parser.cursor.at(0) as string;
    return 1;
  }

  parsedValueIsMissing(parser: Parser): boolean {
    return parser.context[this.key] === undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  preinitialize(parser: Parser): void {}
}
