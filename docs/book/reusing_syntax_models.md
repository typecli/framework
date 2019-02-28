# Reusing Syntax Models

WIP: brief explanation of reusing syntax models


Script:

```ts
import { Mixin } from '@typescript-plus/mixin-decorator';
import { Argument, IncludeSyntax, Option, Run, runSync } from '@typecli/framework';

class Reused {
  @Argument()
  arg!: string;

  @Option()
  opt!: string;
}

@Mixin(Reused)
@IncludeSyntax(Reused)
class Command implements Reused {
  arg!: string;
  opt!: string;

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