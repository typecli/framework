import { AttributeModel, TerminatorModelType } from '../classes/AttributeModel';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';

// tslint:disable-next-line:no-empty-interface
export interface TerminatorModelOptions {}

const TERMINATOR_PARSER_EVENTS = new AttributeParserEventEmitter<TerminatorModel>();

export class TerminatorModel extends AttributeModel implements TerminatorModelType {
  classEvents: AttributeParserEventEmitter<TerminatorModel> = TERMINATOR_PARSER_EVENTS;
  events = new AttributeParserEventEmitter();
  variableName!: string;

  constructor(key: string, public terminatorKeywords: string[], public options: TerminatorModelOptions) {
    super(key);
  }

  // tslint:disable-next-line:no-empty
  preinitialize(parser: Parser): void {}

  terminatorKeywordMatches(word: string): boolean {
    return this.terminatorKeywords.indexOf(word) !== -1;
  }
}
