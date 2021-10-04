import { Argument, Option, parseSync } from '../../../../src';

class Args {
  @Option() s!: string;
  @Option() b!: boolean;
  @Argument() arg1!: string;
  @Argument() arg2!: string;
}

it('README - Features - Structured Syntax Model - Named Arguments', () => {
  const args = new Args();
  parseSync(args, ['foo', '-s', 'bar', '-b', 'baz']);
  expect(args.s).toEqual('bar');
  expect(args.b).toBe(true);
  expect(args.arg1).toEqual('foo');
  expect(args.arg2).toEqual('baz');
});
