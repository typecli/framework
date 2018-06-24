// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Argument, parseSync } from '../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console

class Color {
  @Argument() red?: string;
  @Argument() green?: string;
  @Argument() blue?: string;
}

it('Book - Syntax Items - Named Arguments', () => {
  const captured = capture(process.stdout, buffer => {
    const parsed = new Color();
    parseSync(parsed, ['238', '232', '170']);
    console.log(parsed.red);
    console.log(parsed.green);
    console.log(parsed.blue);
    return buffer.join('');
  });
  expect(captured).toEqual(`238\n232\n170\n`);
});
