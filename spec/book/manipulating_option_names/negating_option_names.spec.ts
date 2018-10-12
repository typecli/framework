// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Option, parseSync } from '../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:no-inferrable-types

class Args {
  @Option({ not: '-B' })
  b: boolean = true;
}

it('Book - Manipulating Option Names - Nagating Option Names', () => {
  const captured = capture(process.stdout, buffer => {
    const args = new Args();
    parseSync(args, ['-B']);
    console.log(args.b);
    return buffer.join('');
  });
  expect(captured).toEqual(`false\n`);
});
