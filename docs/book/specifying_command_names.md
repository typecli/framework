# Specifying Command Names

WIP: brief explanation of specifying command name

```ts
import { Argument, Command, generateHelp, Option } from '@typecli/framework';

@Command({ name: 'command-name' })
class ClassName {
  @Argument({ required: true }) arg!: string;
  @Option() option?: string
}

console.log(generateHelp(ClassName));
```

Output:

```
command-name [OPTIONS] ARG
```
