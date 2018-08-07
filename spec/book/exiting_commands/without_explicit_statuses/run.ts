import { exit, Run, runSync } from '../../../../src';

class Command {
  @Run()
  run() {
    exit();
  }
}

runSync(Command);
