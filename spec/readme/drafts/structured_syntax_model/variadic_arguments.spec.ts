import { Argument, parseSync, Variadic } from '../../../../src';

class Args {
  @Argument() named!: string;
  @Variadic() args!: string[];
}

it('README - Features - Structured Syntax Model - Variadic Arguments', () => {
  const args = new Args();
  parseSync(args, ['foo', 'bar', 'baz']);
  expect(args.named).toEqual('foo');
  expect(args.args).toEqual(['bar', 'baz']);
});
