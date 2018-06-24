// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Option, parseSync } from '../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:no-magic-numbers

class Args {
  @Option() b?: boolean;
}

it('Book - Value Types of Arguments and Options - Boolean', () => {
  const captured = capture(process.stdout, buffer => {
    const parsed = new Args();
    parseSync(parsed, ['-b']);
    console.log(parsed.b);
    return buffer.join('');
  });
  expect(captured).toEqual(`true\n`);
});
