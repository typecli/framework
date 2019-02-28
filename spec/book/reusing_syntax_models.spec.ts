import { Mixin } from '@typescript-plus/mixin-decorator';
// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Argument, IncludeSyntax, Option, Run, runSync } from '../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:no-magic-numbers

class Reused {
  @Argument()
  arg!: string;

  @Option()
  opt!: string;
}

// tslint:disable-next-line:max-classes-per-file
@Mixin(Reused)
@IncludeSyntax(Reused)
class Command implements Reused {
  arg!: string;
  opt!: string;

  @Run()
  run() {
    process.stdout.write(`${this.arg}\n${this.opt}\n`);
  }
}

it(__filename, () => {
  const captured = capture(process.stdout, buffer => {
    runSync(Command, ['--opt', 'opt', 'arg']);
    return buffer.join('');
  });
  expect(captured).toEqual('arg\nopt\n');
});
