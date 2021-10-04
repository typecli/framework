import { capture } from '@typescript-plus/stream-capture';
import { Option, parseSync } from '../../../src';

class Args {
  @Option() b?: boolean;
}

it('Book - Value Types of Arguments and Options - Boolean', () => {
  const captured = capture(process.stdout, (buffer) => {
    const parsed = new Args();
    parseSync(parsed, ['-b']);
    console.log(parsed.b);
    return buffer.join('');
  });
  expect(captured).toEqual(`true\n`);
});
