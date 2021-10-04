import { capture } from '@typescript-plus/stream-capture';
import { generateHelp, Option } from '../../src';

class Command {
  @Option({ default: true, desc: 'Bool value.', not: ['-B', '--Bool'] })
  bool!: boolean;
}

it(__filename, () => {
  const captured = capture(process.stdout, (buffer) => {
    console.log(generateHelp(Command));
    return buffer.join('');
  });
  expect(captured).toEqual(`command [OPTIONS]

Options:
  --bool (not: -B, --Bool)  Bool value.
                            (default: true)
`);
});
