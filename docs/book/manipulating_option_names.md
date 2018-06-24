# Manipulating Option Names

## Defining Multiple Option Names

```ts
import { Option, parseSync } from '@typecli/framework';

class Args {
  @Option({ name: ['-f', '--file'] })
  file?: string;
}

const args = new Args();
parseSync(args, ['-f', 'foo.json']);
console.log(args.file);
parseSync(args, ['--file', 'bar.json']);
console.log(args.file);
```

Output:

```sh
foo.json
bar.json
```

## Joining Option Names

```ts
import { Option, parseSync } from '@typecli/framework';

class Args {
  @Option() a?: bool;
  @Option() b?: bool;
}

const args = new Args();
parseSync(args, ['-ab']);
console.log(args.a);
console.log(args.b);
```

Output:

```sh
true
true
```

## Negating Option Names

```ts
import { Option, parse } from '@typecli/framework';

class Args {
  @Option({ not: '-B' })
  b: boolean = true;
}

const args = new Args();
parse(args, ['-B']);
console.log(args.b);
```

Output:

```sh
false
```

