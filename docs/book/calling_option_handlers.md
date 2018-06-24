# Calling Option Handlers

WIP: brief explanation of option handlers

```ts
import { Handler, Option, Run } from '@typecli/framework';

class Hello {
  @Option() smile?: boolean;

  @Handler() onSmile() {
    console.log(':)');  
  }
  
  @Run() run() {
  	console.log('Hello!');
  }
}
  
run(new Hello(), ['--smile']);
```

Output:

```
:)
Hello!
```

