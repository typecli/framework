import { Parser } from '../classes/Parser';
import { ContextType } from '../types';

export function parseSync<T extends ContextType>(context: T, args: string[]) {
  const parser = new Parser(context, args);
  parser.parseSync();
  return parser;
}
