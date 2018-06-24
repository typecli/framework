// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { run, Run } from '../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:no-magic-numbers

class Smile {
  @Run()
  async smile() {
    console.log(':)');
  }
}

describe(__filename, () => {
  it('works', async () => {
    const captured = await capture(process.stdout, async buffer => {
      await run(Smile);
      return buffer.join('');
    });
    expect(captured).toEqual(`:)\n`);
  });
});
