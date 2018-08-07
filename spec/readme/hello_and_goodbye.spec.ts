// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Argument, Option, runSync, RunSync } from '../../src';

// tslint:disable:max-classes-per-file
// tslint:disable:member-ordering
// tslint:disable:no-console

class HelloGoodbye {
  @Option() bye?: boolean;
  @Argument() to?: string;

  get greeting() {
    return this.bye ? 'Goodbye' : 'Hello';
  }

  @RunSync()
  run() {
    console.log('%s, %s!', this.greeting, this.to);
  }
}

it('Book - Manipulating Option Names - Defining Multiple Option Names', () => {
  const captured = capture(process.stdout, buffer => {
    runSync(HelloGoodbye, ['world']);
    runSync(HelloGoodbye, ['--bye', 'world']);
    return buffer.join('');
  });
  expect(captured).toEqual(`Hello, world!\nGoodbye, world!\n`);
});
