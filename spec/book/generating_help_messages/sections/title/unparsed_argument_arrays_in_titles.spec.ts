// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Argument, generateHelp, Unparsed } from '../../../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console

class Command {
  @Argument() arg?: string;
  @Unparsed(['--'])
  unparsed!: string[];
}

it(__filename, () => {
  const captured = capture(process.stdout, buffer => {
    console.log(generateHelp(Command));
    return buffer.join('');
  });
  expect(captured).toEqual('command [ARG] -- ...\n');
});
