import { AttributeModel } from '../AttributeModel';
import { AttributeParserEventEmitter } from '../EventEmitter';
import { Parser } from '../Parser';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TerminatorModelOptions {}

const PARSER_EVENTS = new AttributeParserEventEmitter<TerminatorModel>();

// export class TerminatorModel extends AttributeModel implements TerminatorModelType {
export class TerminatorModel extends AttributeModel {
  classEvents: AttributeParserEventEmitter<TerminatorModel> = PARSER_EVENTS;
  events = new AttributeParserEventEmitter();
  // variableName!: string;

  constructor(key: string, public terminatorKeywords: string[], public options: TerminatorModelOptions) {
    super(key);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  preinitialize(parser: Parser): void {}

  terminatorKeywordMatches(word: string): boolean {
    return this.terminatorKeywords.indexOf(word) !== -1;
  }
}
