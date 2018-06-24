# Value Types of Arguments and Options

## String

```ts
import { Argument, parseSync } from '@typecli/framework';

class Args {
  @Argument() s?: string;
}

const parsed = new Args();
parseSync(parsed, ['foo']);
console.log(parsed.s);
```

Output:

```
foo
```

## Boolean

```ts
import { Option, parse } from '@typecli/framework';

class Args {
  @Option() b?: boolean;
}

const parsed = new Args();
parse(parsed, ['-b']);
console.log(parsed.b);

```

Output:

```
true
```

## Supported Types by Syntax Items

| Syntax Item             | String | Boolean |
| ----------------------- | ------ | ------- |
| Named Argument          | ✓      |         |
| Variadic Argument Array | ✓      |         |
| Option                  | ✓      | ✓       |
| Option Array            | ✓      |         |

