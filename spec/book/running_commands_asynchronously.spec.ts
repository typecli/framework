import { capture } from '@typescript-plus/stream-capture';
import { run, Run } from '../../src';

class Smile {
  // eslint-disable-next-line @typescript-eslint/require-await
  @Run()
  async smile() {
    console.log(':)');
  }
}

describe(__filename, () => {
  it('works', async () => {
    const captured = await capture(process.stdout, async (buffer) => {
      await run(Smile);
      return buffer.join('');
    });
    expect(captured).toEqual(`:)\n`);
  });
});
