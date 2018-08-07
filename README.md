# TypeCLI

A TypeScript library for building command-line applications in a type-strong way.

[![CircleCI](https://circleci.com/gh/typecli/framework.svg?style=shield)](https://circleci.com/gh/typecli/framework)


```ts
import { Argument, Option, Run, runSync } from '@typecli/framework';

class HelloGoodbye {
  @Option() bye?: boolean;
  @Argument() to?: string;

  get greeting() {
    return this.bye ? 'Goodbye' : 'Hello';
  }

  @RunSync()
  run() {
    console.log('%s, %s!', this.greeting, this.to);
  }
}

runSync(HelloGoodbye, ['world']);
runSync(HelloGoodbye, ['--bye', 'world']);
```

Output:

```sh
Hello world!
Goodbye world!
```

## Install

```sh
npm install @typecli/framework
```

## Configuring Your Compiler

### Decorator

TypeCLI uses decorators. So you must enable the `experimentalDecorators` compiler option.

### Decorator Metadata

For automatic type detection, TypeCLI refers to decorator metadata emitted by the TypeScript compiler. 

To enable automatic type detection, enable the `emitDecoratorMetadata` compiler option.

Please note that automatic type detection is optional, but most of the documents in this repository are written assuming that the option is enabled.

About automatic type detection, see [the document (WIP)](./docs/book/automatic_type_detection.md).

## Features

### Designed for TypeScript Programmers

TypeCLI is designed for TypeScript programmers. As you know, TypeScript has many features for strong typing that is useful for complex and large scale developments. Once you write models of command-line interface applications with TypeCLI, your teammates can easily read and change the source code with the awesome tools and techniques, such as code completion provided by Visual Studio Code or other editors.

## Documentation

See [the Book](./docs/book/index.md).

### License

MIT