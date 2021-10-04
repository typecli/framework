import { Mixin } from '@typescript-plus/mixin-decorator';
import { AttributeModel_minimumElementCount, AttributeModel_variableName } from '../classes/attribute_model/mixins';
import { AttributeModel, VariadicArgumentsModelType } from '../classes/AttributeModel';
import { AttributeModelOptions_min } from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
import { ATTRIBUTE_PARSER_EVENT } from '../events';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StringVariadicArgumentsModelOptions extends AttributeModelOptions_min {}

const PARSER_EVENTS = new AttributeParserEventEmitter<StringVariadicArgumentsModel>();
PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.INITIALIZE, (event) => {
  event.parser.context[event.model.key] = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}).on(ATTRIBUTE_PARSER_EVENT.VALIDATE, (event) => {
  //
});

@Mixin(AttributeModel_variableName)
@Mixin(AttributeModel_minimumElementCount)
export class StringVariadicArgumentsModel extends AttributeModel implements VariadicArgumentsModelType {
  classEvents: AttributeParserEventEmitter<StringVariadicArgumentsModel> = PARSER_EVENTS;
  events = new AttributeParserEventEmitter();
  minimumElementCount: number | undefined;
  variableName!: string;

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
