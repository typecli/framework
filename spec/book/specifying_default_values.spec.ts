// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Option, Run, runSync } from '../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:no-magic-numbers

class Smile {
  @Option({ default: ':)' })
  face!: string;

  @Run()
  smile() {
    console.log(this.face);
  }
}

it(__filename, () => {
  const captured = capture(process.stdout, buffer => {
    runSync(Smile);
    return buffer.join('');
  });
  expect(captured).toEqual(':)\n');
});
