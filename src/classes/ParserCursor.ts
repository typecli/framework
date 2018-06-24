import { Parser } from './Parser';

export class ParserCursor {
  constructor(public parser: Parser, public index = 0) {}

  get args() {
    return this.parser.args;
  }

  get left() {
    return this.length - this.index;
  }

  get length() {
    return this.args.length;
  }

  at(offset: number): string | undefined {
    return this.args[this.index + offset];
  }

  next(size: number) {
    const sliced = this.args.slice(this.index, this.index + size);
    this.index += size;
    return sliced;
  }

  slice(start: number = 0) {
    return this.args.slice(this.index + start);
  }
}
