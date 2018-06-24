// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Argument, generateHelp, Option } from '../../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console

class Serve {
  @Argument({ required: true })
  host!: string;
  @Option() port?: string;
}

it(__filename, () => {
  const captured = capture(process.stdout, buffer => {
    console.log(generateHelp(Serve));
    return buffer.join('');
  });
  expect(captured).toEqual('serve [OPTIONS] HOST\n');
});
