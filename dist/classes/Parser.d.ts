import { ContextSpec } from '../classes/ContextSpec';
import { ContextType } from '../types';
import { ArgumentModelType, OptionArrayModelType, OptionModelType } from './AttributeModel';
import { ParserCursor } from './ParserCursor';
export declare class Parser {
    context: ContextType;
    args: string[];
    contextSpec: ContextSpec;
    cursor: ParserCursor;
    subcontextSpec?: ContextSpec;
    terminated: boolean;
    constructor(context: ContextType, args: string[]);
    readonly ramainingArguments: ArgumentModelType[];
    callOptionHandler(option: OptionModelType | OptionArrayModelType): void;
    initializeAttributes(): void;
    parse(): Promise<void>;
    parseArgs(): void;
    parseArgument(arg: string): void;
    parseLongOption(arg: string): void;
    parseNamedArgument(model: ArgumentModelType): void;
    parseNamelessArgument(arg: string): void;
    parseNext(arg: string): void;
    parseShortOption(arg: string): void;
    parseSubcontextSpecs(arg: string): boolean;
    parseSync(): void;
    parseTerminator(arg: string): boolean;
    validate(): void;
}
