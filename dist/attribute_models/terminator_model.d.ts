import { AttributeModel, TerminatorModelType } from '../classes/AttributeModel';
import { AttributeParserEventEmitter } from '../classes/EventEmitter';
import { Parser } from '../classes/Parser';
export interface TerminatorModelOptions {
}
export declare class TerminatorModel extends AttributeModel implements TerminatorModelType {
    terminatorKeywords: string[];
    options: TerminatorModelOptions;
    classEvents: AttributeParserEventEmitter<TerminatorModel>;
    events: AttributeParserEventEmitter<AttributeModel>;
    variableName: string;
    constructor(key: string, terminatorKeywords: string[], options: TerminatorModelOptions);
    preinitialize(parser: Parser): void;
    terminatorKeywordMatches(word: string): boolean;
}
