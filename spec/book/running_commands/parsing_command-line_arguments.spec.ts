import { capture } from '@typescript-plus/stream-capture';
import { Argument, Run, run } from '../../../src';

class Context {
  @Argument() smiley?: string;

  @Run()
  hello() {
    console.log(`Hello ${this.smiley as string}`);
  }
}

it('Book - Running Commands - Running Custom Code', async () => {
  const captured = await capture(process.stdout, async (buffer) => {
    await run(Context, [':D']);
    return buffer.join('');
  });
  expect(captured).toEqual(`Hello :D\n`);
});
