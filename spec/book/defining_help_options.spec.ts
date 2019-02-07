// tslint:disable-next-line:no-implicit-dependencies
import { shouldThrow } from '@typescript-plus/should-throw';
// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Argument, Exit, run, ShowHelp } from '../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:no-magic-numbers

@ShowHelp()
class Command {
  @Argument() arg?: string;
}

it(__filename, async () => {
  const captured = await capture(process.stdout, async buffer => {
    await shouldThrow(
      Exit,
      async () => {
        await run(Command, ['--help'], { throwOnExit: true });
      },
      (exit: Exit) => {
        expect(exit.status).toEqual(0);
      }
    );
    return buffer.join('');
  });
  expect(captured).toEqual(`command [OPTIONS] [ARG]

Options:
  --help  Show this help.\n`);
});
