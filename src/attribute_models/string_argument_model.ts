import { Mixin } from '@typescript-plus/mixin-decorator';
import {
  AttributeModel_defaultValue, AttributeModel_description, AttributeModel_variableName
} from '../classes/attribute_model/mixins';
import { ArgumentModelType, AttributeModel } from '../classes/AttributeModel';
import {
  AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_required,
  AttributeModelOptions_variableName
} from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
import { ATTRIBUTE_PARSER_EVENT } from '../events';
import { validateArgumentRequired } from '../validators';

export interface StringArgumentModelOptions
  extends AttributeModelOptions_default,
    AttributeModelOptions_desc,
    AttributeModelOptions_required,
    AttributeModelOptions_variableName {}

const PARSER_EVENTS = new AttributeParserEventEmitter<StringArgumentModel>();
PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.INITIALIZE, event => {
  event.parser.context[event.model.key] = event.model.defaultValue;
}).on(ATTRIBUTE_PARSER_EVENT.VALIDATE, event => {
  if (event.model.options.required) {
    validateArgumentRequired(event.parser, event.model);
  }
});

@Mixin(AttributeModel_defaultValue)
@Mixin(AttributeModel_description)
@Mixin(AttributeModel_variableName)
export class StringArgumentModel extends AttributeModel implements ArgumentModelType {
  classEvents: AttributeParserEventEmitter<StringArgumentModel> = PARSER_EVENTS;
  defaultValue: any;
  description: string | undefined;
  events = new AttributeParserEventEmitter();
  variableName!: string;

  constructor(key: string, public options: StringArgumentModelOptions) {
    super(key);
  }

  extractArgumentAndStore(parser: Parser): number {
    parser.context[this.key] = parser.cursor.at(0) as string;
    return 1;
  }

  parsedValueIsMissing(parser: Parser) {
    return parser.context[this.key] === undefined;
  }

  // tslint:disable-next-line:no-empty
  preinitialize(parser: Parser): void {}
}
