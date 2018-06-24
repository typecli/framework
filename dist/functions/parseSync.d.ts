import { Parser } from '../classes/Parser';
import { ContextType } from '../types';
export declare function parseSync<T extends ContextType>(context: T, args: string[]): Parser;
