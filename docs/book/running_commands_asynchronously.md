# Running Commands Asynchronously

WIP: brief explanation

```ts
import { Run, run } from '@typecli/framework';

class Smile {
  @Run() async smile() {
    console.log(':)');    
  }
}

(async () => {
  await run(Smile);
})();
```

Output:

```
:)
```

