// tslint:disable-next-line:no-implicit-dependencies
import { shouldThrow } from '@typescript-plus/should-throw';
// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Exit, run, ShowVersion } from '../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:no-magic-numbers

@ShowVersion('1.0.0')
class Command {}

it(__filename, async () => {
  const captured = await capture(process.stdout, async buffer => {
    await shouldThrow(
      Exit,
      async () => {
        await run(Command, ['-v'], { throwOnExit: true });
      },
      (exit: Exit) => {
        expect(exit.status).toEqual(0);
      }
    );
    return buffer.join('');
  });
  expect(captured).toEqual('1.0.0\n');
});
