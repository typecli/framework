// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Argument, Run, run } from '../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:max-classes-per-file

class Context {
  @Argument() smiley?: string;

  @Run()
  hello() {
    console.log(`Hello ${this.smiley}`);
  }
}

it('Book - Running Commands - Running Custom Code', async () => {
  const captured = await capture(process.stdout, async buffer => {
    await run(Context, [':D']);
    return buffer.join('');
  });
  expect(captured).toEqual(`Hello :D\n`);
});
