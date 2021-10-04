import { Memoize } from '@typescript-plus/fast-memoize-decorator';
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
  AttributeModelOption_not,
} from '../attribute_model/option_member_types';
import { AttributeParserEventEmitter } from '../EventEmitter';
import { Parser } from '../Parser';
import { ATTRIBUTE_PARSER_EVENT } from '../../events';

const PARSER_EVENTS = new AttributeParserEventEmitter<BooleanOptionModel>();
PARSER_EVENTS.on(ATTRIBUTE_PARSER_EVENT.INITIALIZE, (event) => {
  event.parser.context[event.model.key] = event.model.defaultValue;
});

export type BooleanOptionModelOptions = AttributeModelOption_default &
  AttributeModelOption_name &
  AttributeModelOption_desc &
  AttributeModelOption_not;

export class BooleanOptionModel extends AttributeModelMixin_defaultValue(
  AttributeModelMixin_description(AttributeModelMixin_optionNames(AttributeModel))
) {
  classEvents: AttributeParserEventEmitter<BooleanOptionModel> = PARSER_EVENTS;
  events = new AttributeParserEventEmitter();
  hasOptionParameter = false;

  constructor(key: string, public options: BooleanOptionModelOptions) {
    super(key);
  }

  @Memoize()
  get negatedOptionNames(): string[] {
    const not = this.options.not;
    return Array.isArray(not) ? not : not === undefined ? [] : [not];
  }

  extractOptionAndStore(parser: Parser, name: string): number {
    parser.context[this.key] = this.optionNames.indexOf(name) !== -1;
    return 1;
  }

  optionNameMatches(name: string): boolean {
    return this.optionNames.indexOf(name) !== -1 || this.negatedOptionNames.indexOf(name) !== -1;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  preinitialize(parser: Parser): void {}
}
