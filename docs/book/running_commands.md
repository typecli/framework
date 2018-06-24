# Running Commands

## The `run()` API function

To run a command, call the `run()` API function by passing an arbitrary object as a running context:

```ts
import { run } from '@typecli/framework';

run({});
```

The above code does almost nothing, but it shows that the `run()` API functions accepts any types of objects as running contexts.

## Running Custom Code

To run custom code, use the `@Run` decorator. The `@Run` decorator instructs that a target method, that is owned by a running context, should be called on calling the `run()` API function.

Example:

```ts
import { Run, run } from '@typecli/framework';

class Context {
  @Run() hello() {
    console.log('Hello :)');
  }
}

run(new Context());
```

Output:

```ts
Hello :)
```

