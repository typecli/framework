# Describing Subcommands

WIP: explanation of subcommands

```ts
import { Argument, Parsed, Run, Sub, runSync } from '@typecli/framework';

class Hello {
  @Argument() face?: string; 

  @Run()
  hello() {
	  console.log(`Hello ${this.face}`);
  }
}

class Bye {
  @Argument() face?: string;

  @Run()
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

