import { shouldThrow } from '@typescript-plus/should-throw';
import { capture } from '@typescript-plus/stream-capture';
import { Argument, Exit, run, ShowHelp } from '../../src';

@ShowHelp()
class Command {
  @Argument() arg?: string;
}

it(__filename, async () => {
  const captured = await capture(process.stdout, async (buffer) => {
    await shouldThrow(
      Exit,
      async () => {
        await run(Command, ['--help'], { throwOnExit: true });
      },
      (exit: Exit) => Promise.resolve(expect(exit.status).toEqual(0))
    );
    return buffer.join('');
  });
  expect(captured).toEqual(`command [OPTIONS] [ARG]

Options:
  --help  Show this help.\n`);
});
