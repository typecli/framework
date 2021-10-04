import { AttributeModelMixin_defaultValue, AttributeModelMixin_variableName } from '../attribute_model/mixins';
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

export type DateArgumentModelOptions = AttributeModelOption_default &
  AttributeModelOption_desc &
  AttributeModelOption_required &
  AttributeModelOption_variableName;

const PARSER_EVENTS = new AttributeParserEventEmitter<DateArgumentModel>();
PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.VALIDATE, (event) => {
  if (event.model.options.required) {
    validateArgumentRequired(event.parser, event.model);
  }
});

export class DateArgumentModel extends AttributeModelMixin_defaultValue(
  AttributeModelMixin_variableName(AttributeModel)
) {
  classEvents: AttributeParserEventEmitter<DateArgumentModel> = PARSER_EVENTS;
  description: string | undefined;
  events = new AttributeParserEventEmitter();

  constructor(key: string, public options: DateArgumentModelOptions) {
    super(key);
  }

  extractArgumentAndStore(parser: Parser): number {
    parser.context[this.key] = new Date(parser.cursor.at(0) as string);
    return 1;
  }

  parsedValueIsMissing(parser: Parser): boolean {
    return parser.context[this.key] === undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  preinitialize(parser: Parser): void {}
}
