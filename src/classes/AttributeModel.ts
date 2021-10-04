import { ATTRIBUTE_PARSER_EVENT } from '../events';
import { AttributeModelOptions } from './AttributeModelOptions';
import { AttributeParserEvent } from './Event';
import { AttributeParserEventEmitter } from './EventEmitter';
import { Parser } from './Parser';

export abstract class AttributeModel {
  abstract classEvents: AttributeParserEventEmitter<AttributeModel>;
  abstract events: AttributeParserEventEmitter<AttributeModel>;
  abstract options: AttributeModelOptions;

  constructor(public key: string) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  emitParserEvent(event: ATTRIBUTE_PARSER_EVENT, parser: Parser, ...args: unknown[]): void {
    [this.events, this.classEvents].forEach((events) => {
      events.emit(new AttributeParserEvent(event, this, parser));
    });
  }

  abstract preinitialize(parser: Parser): void;
}
