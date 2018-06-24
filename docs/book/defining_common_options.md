# Defining Help Options

WIP: brief explanation of help options

```ts
import { Argument, ShowHelp, run } from '@typecli/framework';

@ShowHelp()
class Command {
  @Argument() arg?: string;
}

run(new Command(), ['-h']);
```

Output:

```
command [OPTIONS] [ARG]

Options:
  --help, -h  Show this help.
```