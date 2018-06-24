// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Options, parseSync } from '../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:no-magic-numbers

class PortMapping {
  @Options(String) ports!: string[];
}

it('Book - Syntax Items - Option Array', () => {
  const captured = capture(process.stdout, buffer => {
    const parsed = new PortMapping();
    parseSync(parsed, ['--port', '8080:80', '--port', '8022:22']);
    console.log(parsed.ports[0]);
    console.log(parsed.ports[1]);
    return buffer.join('');
  });
  expect(captured).toEqual(`8080:80\n8022:22\n`);
});
