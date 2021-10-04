import { capture } from '@typescript-plus/stream-capture';
import { Argument, Run, runSync, Sub } from '../../../src';

class Hello {
  @Argument() face?: string;

  @Run()
  hello() {
    console.log(`Hello ${this.face as string}`);
  }
}

class Bye {
  @Argument() face?: string;

  @Run()
  bye() {
    console.log(`Goodbye ${this.face as string}`);
  }
}

@Sub(Hello)
@Sub(Bye)
class Main {}

it('Book - Describing Subcommands', () => {
  const captured = capture(process.stdout, (buffer) => {
    runSync(Main, ['hello', ':)']);
    runSync(Main, ['bye', ':(']);
    return buffer.join('');
  });
  expect(captured).toEqual('Hello :)\nGoodbye :(\n');
});
