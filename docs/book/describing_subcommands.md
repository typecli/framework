# Describing Subcommands

WIP: explanation of subcommands

```ts
import { Argument, Run, Sub, runSync } from '@typecli/framework';

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

runSync(Main, ['hello', ':)']);
runSync(Main, ['bye', ':(']);
```

Output:

```
Hello :)
Goodbye :(
```

