import { capture } from '@typescript-plus/stream-capture';
import { Argument, Option, Run, runSync } from '../../src';

class HelloGoodbye {
  @Option() bye?: boolean;
  @Argument() to?: string;

  get greeting() {
    return this.bye ? 'Goodbye' : 'Hello';
  }

  @Run()
  run() {
    console.log('%s, %s!', this.greeting, this.to);
  }
}

it('Book - Manipulating Option Names - Defining Multiple Option Names', () => {
  const captured = capture(process.stdout, (buffer) => {
    runSync(HelloGoodbye, ['world']);
    runSync(HelloGoodbye, ['--bye', 'world']);
    return buffer.join('');
  });
  expect(captured).toEqual(`Hello, world!\nGoodbye, world!\n`);
});
