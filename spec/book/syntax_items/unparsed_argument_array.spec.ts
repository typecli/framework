// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { parseSync, Variadic } from '../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:no-magic-numbers

class Kitty {
  @Variadic() names!: string[];
}

it('Book - Syntax Items - Variadic Argument Array', () => {
  const captured = capture(process.stdout, buffer => {
    const parsed = new Kitty();
    parseSync(parsed, ['figaro', 'lucifer', 'cheshire']);
    console.log(parsed.names[0]);
    console.log(parsed.names[1]);
    console.log(parsed.names[2]);
    return buffer.join('');
  });
  expect(captured).toEqual(`figaro\nlucifer\ncheshire\n`);
});
