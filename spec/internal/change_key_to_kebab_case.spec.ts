import { capture } from '@typescript-plus/stream-capture';
import { generateHelp, Option } from '../../src';

class Main {
  @Option({ desc: 'desc' })
  camelCase!: string;
}

it(__filename, () => {
  const captured = capture(process.stdout, (buffer) => {
    console.log(generateHelp(Main));
    return buffer.join('');
  });
  expect(captured).toEqual(`main [OPTIONS]

Options:
  --camel-case  desc
`);
});
