import { Parser } from '../classes/Parser';
import { ContextType } from '../types';
export declare function parse<T extends ContextType>(context: T, args: string[]): Promise<Parser>;
