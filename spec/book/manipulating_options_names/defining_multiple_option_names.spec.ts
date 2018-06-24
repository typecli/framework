// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Option, parseSync } from '../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console

class Args {
  @Option({ name: ['-f', '--file'] })
  file?: string;
}

it('Book - Manipulating Option Names - Defining Multiple Option Names', () => {
  const captured = capture(process.stdout, buffer => {
    const args = new Args();
    parseSync(args, ['-f', 'foo.json']);
    console.log(args.file);
    parseSync(args, ['--file', 'bar.json']);
    console.log(args.file);
    return buffer.join('');
  });
  expect(captured).toEqual(`foo.json\nbar.json\n`);
});
