import { exit, runSync, RunSync } from '../../../../src';

class Command {
  @RunSync()
  run() {
    exit();
  }
}

runSync(Command);
