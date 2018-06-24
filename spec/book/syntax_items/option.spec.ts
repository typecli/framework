// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Option, parseSync } from '../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:no-magic-numbers

class Server {
  @Option() port!: string;
}

it('Book - Syntax Items - Option', () => {
  const captured = capture(process.stdout, buffer => {
    const parsed = new Server();
    parseSync(parsed, ['--port', '8080']);
    console.log(parsed.port);
    return buffer.join('');
  });
  expect(captured).toEqual(`8080\n`);
});
