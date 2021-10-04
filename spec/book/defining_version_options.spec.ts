import { shouldThrow } from '@typescript-plus/should-throw';
import { capture } from '@typescript-plus/stream-capture';
import { Exit, run, ShowVersion } from '../../src';

@ShowVersion('1.0.0')
class Command {}

it(__filename, async () => {
  const captured = await capture(process.stdout, async (buffer) => {
    await shouldThrow(
      Exit,
      async () => {
        await run(Command, ['--version'], { throwOnExit: true });
      },
      (exit: Exit) => Promise.resolve(expect(exit.status).toEqual(0))
    );
    return buffer.join('');
  });
  expect(captured).toEqual('1.0.0\n');
});
