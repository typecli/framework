import { Parser } from './Parser';
export declare class ParserCursor {
    parser: Parser;
    index: number;
    constructor(parser: Parser, index?: number);
    readonly args: string[];
    readonly left: number;
    readonly length: number;
    at(offset: number): string | undefined;
    next(size: number): string[];
    slice(start?: number): string[];
}
