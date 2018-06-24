import { Argument, parseSync, Unparsed } from '../../../../src';

// tslint:disable:member-ordering

class Args {
  @Argument() named!: string;
  @Unparsed(['--'])
  unparsed!: string[];
}

it('README - Features - Structured Syntax Model - Unparsed Arguments', () => {
  const args = new Args();
  parseSync(args, ['foo', '--', 'bar', 'baz']);
  expect(args.named).toEqual('foo');
  expect(args.unparsed).toEqual(['bar', 'baz']);
});
