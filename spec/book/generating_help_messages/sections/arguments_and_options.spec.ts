// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Argument, generateHelp, Option } from '../../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console

class Connect {
  @Argument({
    desc: "Server's hostname or IP address.",
    required: true
  })
  host!: string;
  @Option({ default: '4747', desc: 'Port number.' })
  port?: string;
}

it(__filename, () => {
  const captured = capture(process.stdout, buffer => {
    console.log(generateHelp(Connect));
    return buffer.join('');
  });
  expect(captured).toEqual(`connect [OPTIONS] HOST

Arguments:
  HOST  Server's hostname or IP address.

Options:
  --port  Port number.
          (default: 4747)
`);
});
