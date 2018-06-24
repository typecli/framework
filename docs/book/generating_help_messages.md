# Generating Help Messages

## Sections

### Title

WIP: brief explanation of auto-generated title

```ts
import { Argument, generateHelp, Option } from '@typecli/framework';

class Serve {
  @Argument({ required: true }) host!: string;
  @Option() port?: string;
}

console.log(generateHelp(Serve));
```

Output:

```
serve [OPTIONS] HOST
```

#### Variadic Argument Arrays in Titles

WIP: brief explanation of variadic argument arrays in titles

```ts
import { generalHelp, Variadic } from '@typecli/framework';

class Multiply {
  @Variadic({ min: 2 }) numbers!: string[];

  calculate() {
    return this.numbers.filter(Number).reduce((a, b) => a * b);
  }
}

console.log(generateHelp(Multiply));
```

Output:

```
multiply NUBMER1 NUMBER2 [NUMBER3 NUMBER4...]
```

#### Unparsed Argument Arrays in Titles

WIP: brief explanation of unparsed argument arrays in titles

```ts
import { Argument, generateHelp, Unparsed } from '@typecli/framework';

class Command {
  @Argument() arg?: string;
  @Unparsed(['--']) unparsed!: string[];
}

console.log(generateHelp(Command));
```

Output:

```ts
command [ARG] -- ...
```

### Arguments and Options

WIP: brief explanation of arguments and options

```ts
import { Argument, Option, generateHelp } from '@typecli/framework';

class Connect {
  @Argument({
    required: true,
    desc: "Server's hostname or IP address."
  }) host!: string;
  @Option({ default: '4747', desc: 'Port number.' })
  port?: string;
}

console.log(generateHelp(Connect));
```

Output:

```
connect [OPTIONS] HOST

Arguments:
  HOST  Server's hostname or IP address.

Options:
  --port  Port number.
          (default: 4747)
```

### Header and Footer

WIP: brief explanation of header and footer

```ts
import { Argument, generateHelp, Help } from '@typecli/framework';

@Help({ header: ':)', footer: '© mosop' })
class Hello {
  @Argument({ required: true, desc: 'Who you want to talk to.' })
  to!: string;
}

console.log(generateHelp(Hello));
```

Output:

```ts
hello TO

:)

Arguments:
  TO  Who you want to talk to.
  
© mosop
```

### Subcommands

WIP: brief explanation of subcommands

```ts
import { generateHelp, Help, Sub } from '@typecli/framework';

@Help({ caption: 'Made with Sachinoka strawberry.' })
class Strawberry {}

@Help({ caption: 'New York style.' })
class Cheese {}

@Help({ caption: 'Winter only.' })
class Chocolat {}

@Sub(Strawberry)
@Sub(Cheese)
@Sub(Chocolat)
class Cake {}

console.log(generateHelp(Cake));
```

Output:

```
cake SUBCOMMAND

Subcommands:
  cheese      New York style.
  chocolat    Winter only.
  Strawberry  Made with Sachinoka strawberry.
```

