import { ATTRIBUTE_PARSER_EVENT } from '../events';
import { AttributeModel } from './AttributeModel';
import { Parser } from './Parser';

// tslint:disable-next-line:no-empty-interface
export interface Event<T> {
  name: string;
}

export class AttributeParserEvent<M extends AttributeModel> implements Event<ATTRIBUTE_PARSER_EVENT> {
  constructor(public name: string, public model: M, public parser: Parser) {}
}
