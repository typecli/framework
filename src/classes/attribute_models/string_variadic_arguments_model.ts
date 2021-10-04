import { AttributeModelMixin_minimumElementCount, AttributeModelMixin_variableName } from '../attribute_model/mixins';
import { AttributeModel } from '../AttributeModel';
import { AttributeModelOption_min } from '../attribute_model/option_member_types';
import { AttributeParserEventEmitter } from '../EventEmitter';
import { Parser } from '../Parser';
import { ATTRIBUTE_PARSER_EVENT } from '../../events';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type StringVariadicArgumentsModelOptions = AttributeModelOption_min;

const PARSER_EVENTS = new AttributeParserEventEmitter<StringVariadicArgumentsModel>();
PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.INITIALIZE, (event) => {
  event.parser.context[event.model.key] = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}).on(ATTRIBUTE_PARSER_EVENT.VALIDATE, (event) => {
  //
});

export class StringVariadicArgumentsModel extends AttributeModelMixin_variableName(
  AttributeModelMixin_minimumElementCount(AttributeModel)
) {
  classEvents: AttributeParserEventEmitter<StringVariadicArgumentsModel> = PARSER_EVENTS;
  events = new AttributeParserEventEmitter();

  constructor(key: string, public options: StringVariadicArgumentsModelOptions) {
    super(key);
  }

  extractArgumentAndStore(parser: Parser): number {
    (parser.context[this.key] as string[]).push(parser.cursor.at(0) as string);
    return 1;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  preinitialize(parser: Parser): void {}
}
