# Describing Command-Line Syntax

TypeCLI is a tool for describing command-line syntax models. Once you define a syntax model, TypeCLI automatically runs its processes, such as parsing command-lines and generating help messages, according to the defined syntax.

A syntax model consists of syntax items, such as arguments and options. To define syntax items, use syntax item decorators.

For example, the following code defines a syntax that has one option `--out-dir`, accessible by the `outDir` property, and one argument, accessible by the file property:

```ts
import { Argument, Option } from '@typecli/framework';

class Compile {
  @Option() outDir?: string;
  @Argument() file?: string;
}
```

