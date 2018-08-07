// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Argument, runSync, Sub } from '../../../src';
import { RunSync } from '../../../src/decorators/RunSync';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:max-classes-per-file

class Hello {
  @Argument() face?: string;

  @RunSync()
  hello() {
    console.log(`Hello ${this.face}`);
  }
}

class Bye {
  @Argument() face?: string;

  @RunSync()
  bye() {
    console.log(`Goodbye ${this.face}`);
  }
}

@Sub(Hello)
@Sub(Bye)
class Main {}

it('Book - Describing Subcommands', () => {
  const captured = capture(process.stdout, buffer => {
    runSync(Main, ['hello', ':)']);
    runSync(Main, ['bye', ':(']);
    return buffer.join('');
  });
  expect(captured).toEqual('Hello :)\nGoodbye :(\n');
});
