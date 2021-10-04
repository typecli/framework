import { Parser } from './Parser';

export class ParserCursor {
  constructor(public parser: Parser, public index = 0) {}

  get args(): string[] {
    return this.parser.args;
  }

  get left(): number {
    return this.length - this.index;
  }

  get length(): number {
    return this.args.length;
  }

  at(offset: number): string | undefined {
    return this.args[this.index + offset];
  }

  next(size: number): string[] {
    const sliced = this.args.slice(this.index, this.index + size);
    this.index += size;
    return sliced;
  }

  slice(start = 0): string[] {
    return this.args.slice(this.index + start);
  }
}
