import { capture } from '@typescript-plus/stream-capture';
import { Handler, Option, run, Run } from '../../src';

class Hello {
  @Option() smile?: boolean;

  @Handler()
  onSmile() {
    console.log(':)');
  }

  @Run()
  run() {
    console.log('Hello!');
  }
}

it('Book - Value Types of Arguments and Options - Boolean', async () => {
  const captured = await capture(process.stdout, async (buffer) => {
    await run(Hello, ['--smile']);
    return buffer.join('');
  });
  expect(captured).toEqual(`:)\nHello!\n`);
});
