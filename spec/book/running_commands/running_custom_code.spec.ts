// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Run, run } from '../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console

class Context {
  @Run()
  hello() {
    console.log('Hello :)');
  }
}

it('Book - Running Commands - Running Custom Code', async () => {
  const captured = await capture(process.stdout, async buffer => {
    await run(Context);
    return buffer.join('');
  });
  expect(captured).toEqual(`Hello :)\n`);
});
