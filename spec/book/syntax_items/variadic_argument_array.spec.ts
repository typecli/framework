// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { parseSync, Unparsed } from '../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:no-magic-numbers

class Args {
  @Unparsed(['--'])
  unparsed!: string[];
}

it('Book - Syntax Items - Unparsed Argument Array', () => {
  const captured = capture(process.stdout, buffer => {
    const args = new Args();
    parseSync(args, ['foo', '--', 'bar', 'baz']);
    console.log(args.unparsed[0]);
    console.log(args.unparsed[1]);
    return buffer.join('');
  });
  expect(captured).toEqual(`bar\nbaz\n`);
});
