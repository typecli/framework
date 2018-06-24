// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { generateHelp, Variadic } from '../../../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console

class Multiply {
  @Variadic({ min: 2 })
  numbers!: string[];

  calculate() {
    console.log(this.numbers.map(Number).reduce((a, b) => a * b));
  }
}

it(__filename, () => {
  const captured = capture(process.stdout, buffer => {
    console.log(generateHelp(Multiply));
    return buffer.join('');
  });
  expect(captured).toEqual('multiply NUMBER1 NUMBER2 [NUMBER3 NUMBER4...]\n');
});
