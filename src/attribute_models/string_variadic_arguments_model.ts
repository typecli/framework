import { Mixin } from '@typescript-plus/mixin-decorator';
import { AttributeModel_minimumElementCount, AttributeModel_variableName } from '../classes/attribute_model/mixins';
import { AttributeModel, VariadicArgumentsModelType } from '../classes/AttributeModel';
import { AttributeModelOptions_min } from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
import { ATTRIBUTE_PARSER_EVENT } from '../events';

// tslint:disable-next-line:no-empty-interface
export interface StringVariadicArgumentsModelOptions extends AttributeModelOptions_min {}

const STRING_VARIADIC_ARGUMENTS_PARSER_EVENTS = new AttributeParserEventEmitter<StringVariadicArgumentsModel>();
STRING_VARIADIC_ARGUMENTS_PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.INITIALIZE, event => {
  event.parser.context[event.model.key] = [];
}).on(ATTRIBUTE_PARSER_EVENT.VALIDATE, event => {
  //
});

@Mixin(AttributeModel_variableName)
@Mixin(AttributeModel_minimumElementCount)
export class StringVariadicArgumentsModel extends AttributeModel implements VariadicArgumentsModelType {
  classEvents: AttributeParserEventEmitter<StringVariadicArgumentsModel> = STRING_VARIADIC_ARGUMENTS_PARSER_EVENTS;
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

  // tslint:disable-next-line:no-empty
  preinitialize(parser: Parser): void {}
}
