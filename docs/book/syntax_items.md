# Syntax Items

## Named Argument

*Named argument* is a command-line argument directly accessible with a corresponding property.

Named arguments are defined by the `@Argument` decorator:

```ts
import { Argument } from '@typecli/framework';

class Color {
  @Argument() red?: string;
  @Argument() green?: string;
  @Argument() blue?: string;
}
```

The above code defines three arguments. Each of the arguments is accessible by the corresponding property, `Color#red`, `Color#green` or `Color#blue`.

Let's try parsing a command-line with the syntax:

```ts
import { Argument, parse } from '@typecli/framework';

class Color {
  @Argument() red?: string;
  @Argument() green?: string;
  @Argument() blue?: string;
}

const parsed = new Color();
parse(parsed, ['238', '232', '170']);
console.log(parsed.red);
console.log(parsed.green);
console.log(parsed.blue);
```

Output:

```
238
232
170
```

## Variadic Argument Array

*Variadic argument array* is an array of nameless arguments.

<!--Variadic argument arrays are useful for making commands to which arbitrary number of arguments can be passed.-->

Variadic argument arrays are defined by the `@Variadic` decorator:

```ts
import { Variadic } from '@typecli/framework';

class Kitty
  @Variadic() names!: string[];
}
```

The above code defines one variadic argument array (`Kitty#names`). Each of the arguments in a command-line will be appended to the array.

Let's try parsing a command-line with the syntax:

```ts
import { Variadic, parse } from '@typecli/framework';

class Kitty {
  @Variadic() names!: string[];
}

const parsed = new Kitty();
parse(parsed, ['figaro', 'lucifer', 'cheshire']);
console.log(parsed.names[0]);
console.log(parsed.names[1]);
console.log(parsed.names[2]);
```

Output:

```sh
figaro
lucifer
cheshire
```

## Unparsed Argument Array

*Unparsed argument array* is an array of nameless arguments that are appeared after a terminator.

*Terminator* is a specific string. If TypeCLI finds a command-line argument that matches a terminator string, it stops its parsing process.

Unparsed argument arrays are defined by the `@Unparsed` decorator:

```ts
import { Unparsed } from '@typecli/framework';

class Args {
  @Unparsed(['--']) unparsed!: string[];
}
```

The above code defines one unparsed argument array (`Args#unparsed`) with a terminator ("`--`"). Arguments appeared after the terminator in a command-line will be appended to the array.

Let's try parsing a command-line with the syntax:

```ts
import { Unparsed, parse } from '@typecli/framework';

class Args {
  @Unparsed(['--']) unparsed!: string[];
}

const args = new Args();
parse(args, ['foo', '--', 'bar', 'baz']);
console.log(args.unparsed[0]);
console.log(args.unparsed[1]);
```

Output:

```sh
bar
baz
```

<!--Unparsed argument arrays are useful for making commands that hand over some of their parsing processes to another commands or parsers. For example, you can easily make commands like the ssh command:-->

## Option

WIP: brief explanation of option

Options are defined by the `@Option` decorator:

```ts
import { Option } from '@typecli/framework';

class Server {
  @Option() port?: string;
}
```

The above code defines one option ("`--port`") accessible with the `Server#port` property.

Let's try parsing a command-line with the syntax:

```ts
import { Option, parse } from '@typecli/framework';

class Server {
  @Option() port?: string;
}

const parsed = new Server();
parse(parsed, ['--port', '8080' ]);
console.log(parsed.port);
```

Output:

```sh
8080
```

## Option Array

WIP: brief explanation of option array

Option arrays are defined by the `@Options` decorator.

```ts
import { Options } from '@typecli/framework';

class PortMapping {
  @Options(String) ports!: string[];
}
```

The above code defines one option array (`Args#ports` ) with an option name ("`--port`"). Each "`--port`" option in a command-line will be appended to the array.

Please note that you must pass the `String` constructor, as an option's value type, to the `@Options` decorator. Because type information on elements of array properties are not emitted by the TypeScript Compiler and cannot be automatically resolved. [^1]

An option's name is automatically determined by converting a corresponding property's name to its singular form. In the above case, "ports" is converted to "port".

Let's try parsing a command-line with the syntax:

```ts
import { Options, parse } from '@typecli/framework';

class PortMapping {
  @Options(String) ports!: string[];
}

const parsed = new PortMapping();
parse(parsed, ['--port', '8080:80', '--port', '8022:22' ]);
console.log(parsed.ports[0]);
console.log(parsed.ports[1]);
```

Output:

```
8080:80
8022:22
```

[^1]: https://github.com/Microsoft/TypeScript/issues/7169

