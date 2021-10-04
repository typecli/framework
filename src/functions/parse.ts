import { Parser } from '../classes/Parser';
import { ContextType } from '../types';

export async function parse<T extends ContextType>(context: T, args: string[]): Promise<Parser> {
  const parser = new Parser(context, args);
  await parser.parse();
  return parser;
}
