import { capture } from '@typescript-plus/stream-capture';
import { Option, parseSync } from '../../../src';

class Args {
  @Option() a?: boolean;
  @Option() b?: boolean;
}

it('Book - Manipulating Option Names - Joining Option Names', () => {
  const captured = capture(process.stdout, (buffer) => {
    const args = new Args();
    parseSync(args, ['-ab']);
    console.log(args.a);
    console.log(args.b);
    return buffer.join('');
  });
  expect(captured).toEqual('true\ntrue\n');
});
