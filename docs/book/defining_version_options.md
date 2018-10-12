# Defining Version Options

WIP: brief explanation of version options

```ts
import { run, ShowVersion } from '@typecli/framework';

@ShowVersion('1.0.0')
class Command {
}

run(new Command(), ['-v']);
```

Output:

```
1.0.0
```

