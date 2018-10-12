# Specifying Default Values

WIP: brief explanation

```ts
import { Option, Run, runSync } from '@typecli/framework';

class Smile {
  @Option({default: ':)'})
  face!: string
  
  @Run() smile() {
    console.log(this.face);    
  }
}

runSync(Smile);
```

Output:

```
:)
```

