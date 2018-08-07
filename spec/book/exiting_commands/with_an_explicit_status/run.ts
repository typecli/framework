import { exit, runSync, RunSync } from '../../../../src';

class Command {
  @RunSync()
  run() {
    exit(1);
  }
}

runSync(Command);
