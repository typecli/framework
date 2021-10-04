import { capture } from '@typescript-plus/stream-capture';
import { Argument, IncludeSyntax, Option, Run, runSync } from '../../src';

class Reused {
  @Argument()
  arg!: string;

  @Option()
  opt!: string;
}

@IncludeSyntax(Reused)
class Command extends Reused {
  @Run()
  run() {
    process.stdout.write(`${this.arg}\n${this.opt}\n`);
  }
}

it(__filename, () => {
  const captured = capture(process.stdout, (buffer) => {
    runSync(Command, ['--opt', 'opt', 'arg']);
    return buffer.join('');
  });
  expect(captured).toEqual('arg\nopt\n');
});
