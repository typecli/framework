import { capture } from '@typescript-plus/stream-capture';
import { Argument, parseSync } from '../../../src';

class Args {
  @Argument() s?: string;
}

it('Book - Value Types of Arguments and Options - String', () => {
  const captured = capture(process.stdout, (buffer) => {
    const parsed = new Args();
    parseSync(parsed, ['foo']);
    console.log(parsed.s);
    return buffer.join('');
  });
  expect(captured).toEqual(`foo\n`);
});
