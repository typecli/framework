import { capture } from '@typescript-plus/stream-capture';
import { Option, parseSync } from '../../../src';

class Args {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Option({ not: '-B' })
  b: boolean = true;
}

it('Book - Manipulating Option Names - Nagating Option Names', () => {
  const captured = capture(process.stdout, (buffer) => {
    const args = new Args();
    parseSync(args, ['-B']);
    console.log(args.b);
    return buffer.join('');
  });
  expect(captured).toEqual(`false\n`);
});
