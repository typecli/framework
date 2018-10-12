import { Memoize } from '@typescript-plus/fast-memoize-decorator';
import { Mixin } from '@typescript-plus/mixin-decorator';
import { AttributeModel_defaultValue, AttributeModel_description } from '../classes/attribute_model/mixins';
import { AttributeModel, AttributeModel_optionNames, OptionModelType } from '../classes/AttributeModel';
import {
  AttributeModelOptions_default, AttributeModelOptions_desc, AttributeModelOptions_name, AttributeModelOptions_not
} from '../classes/AttributeModelOptions';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
import { ATTRIBUTE_PARSER_EVENT } from '../events';

const PARSER_EVENTS = new AttributeParserEventEmitter<BooleanOptionModel>();
PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.INITIALIZE, event => {
  event.parser.context[event.model.key] = event.model.defaultValue;
});

// tslint:disable-next-line:no-empty-interface
export interface BooleanOptionModelOptions
  extends AttributeModelOptions_default,
    AttributeModelOptions_name,
    AttributeModelOptions_desc,
    AttributeModelOptions_not {}

@Mixin(AttributeModel_defaultValue)
@Mixin(AttributeModel_description)
@Mixin(AttributeModel_optionNames)
export class BooleanOptionModel extends AttributeModel implements OptionModelType {
  classEvents: AttributeParserEventEmitter<BooleanOptionModel> = PARSER_EVENTS;
  defaultValue: any;
  description: string | undefined;
  events = new AttributeParserEventEmitter();
  hasOptionParameter = false;
  optionNames!: string[];

  constructor(key: string, public options: BooleanOptionModelOptions) {
    super(key);
  }

  @Memoize()
  get negatedOptionNames() {
    const not = this.options.not;
    return not ? not : [];
  }

  extractOptionAndStore(parser: Parser, name: string): number {
    parser.context[this.key] = this.optionNames.indexOf(name) !== -1;
    return 1;
  }

  optionNameMatches(name: string): boolean {
    return this.optionNames.indexOf(name) !== -1 || this.negatedOptionNames.indexOf(name) !== -1;
  }

  // tslint:disable-next-line:no-empty
  preinitialize(parser: Parser): void {}
}
