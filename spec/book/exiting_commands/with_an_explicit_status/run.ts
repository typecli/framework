import { exit, Run, runSync } from '../../../../src';

class Command {
  @Run()
  run() {
    exit(1);
  }
}

runSync(Command);
