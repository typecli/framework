# Describing Subcommands

WIP: explanation of subcommands

```ts
import { Argument, Parsed, Run, Sub, runSync } from '@typecli/framework';

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
class Main {
}

runSync(new Main(), ['hello', ':)']);
runSync(new Main(), ['bye', ':(']);
```

Output:

```
Hello :)
Goodbye :(
```

