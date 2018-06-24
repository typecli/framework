import { ATTRIBUTE_PARSER_EVENT } from '../events';
import { AttributeModel } from './AttributeModel';
import { Parser } from './Parser';
export interface Event<T> {
    name: string;
}
export declare class AttributeParserEvent<M extends AttributeModel> implements Event<ATTRIBUTE_PARSER_EVENT> {
    name: string;
    model: M;
    parser: Parser;
    constructor(name: string, model: M, parser: Parser);
}
