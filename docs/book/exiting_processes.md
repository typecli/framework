# Exiting Processes

WIP: brief explanation of exiting processes

## Without Explicit Statuses (Success)

```ts
import { exit, Run, runSync } from '@typecli/framework';

class Command {
  @Run()
  run() {
    exit();
  }
}

runSync(new Command());
```

exits with a status of 0.

## With an Explicit Status

```ts
import { exit, Run, runSync } from '@typecli/framework';

class Command {
  @Run()
  run() {
    exit(1);
  }
}

runSync(new Command());
```

exits with a status of 1.

