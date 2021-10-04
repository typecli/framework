# Reusing Syntax Models

WIP: brief explanation of reusing syntax models


Script:

```ts
import { Argument, IncludeSyntax, Option, Run, runSync } from '@typecli/framework';

class Reused {
  @Argument()
  arg!: string;

  @Option()
  opt!: string;
}

@IncludeSyntax(Reused)
class Command extend Reused {
  @Run()
  run() {
    process.stdout.write(`${this.arg}\n${this.opt}\n`);
  }
}

runSync(Command, ['--opt', 'opt', 'arg']);
```

Output:

```
arg
opt
```
