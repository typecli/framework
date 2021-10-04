import { capture } from '@typescript-plus/stream-capture';
import { Argument, Command, generateHelp, Option } from '../../src';

@Command({ name: 'command-name' })
class ClassName {
  @Argument({ required: true }) arg!: string;
  @Option() option?: string;
}

it(__filename, () => {
  const captured = capture(process.stdout, (buffer) => {
    console.log(generateHelp(ClassName));
    return buffer.join('');
  });
  expect(captured).toEqual('command-name [OPTIONS] ARG\n');
});
