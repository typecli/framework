// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { generateHelp, Option } from '../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:no-magic-numbers

class Main {
  @Option({ desc: 'desc' })
  camelCase!: string;
}

it(__filename, () => {
  const captured = capture(process.stdout, buffer => {
    console.log(generateHelp(Main));
    return buffer.join('');
  });
  expect(captured).toEqual(`main [OPTIONS]

Options:
  --camel-case  desc
`);
});
