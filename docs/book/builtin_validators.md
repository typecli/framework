# Builtin Validators

## Required Arguments

```ts
import { Argument, parse } from '@typecli/framework';

class Compile {
  @Argument({ required: true })
  sourceFile!: string;
}

parse(new Compile(), []);
```

throws `MissingAttributeError`.

## Required Options

```ts
import { Option, parse } from '@typecli/framework';

class Profile {
  @Option({ required: true })
  birthday!: string;
}

parse(new Profile(), []);
```

throws `MissingAttributeError`.
