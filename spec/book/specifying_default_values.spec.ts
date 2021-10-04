import { capture } from '@typescript-plus/stream-capture';
import { Option, Run, runSync } from '../../src';

class Smile {
  @Option({ default: ':)' })
  face!: string;

  @Run()
  smile() {
    console.log(this.face);
  }
}

it(__filename, () => {
  const captured = capture(process.stdout, (buffer) => {
    runSync(Smile);
    return buffer.join('');
  });
  expect(captured).toEqual(':)\n');
});
