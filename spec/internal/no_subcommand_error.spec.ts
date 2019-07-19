// tslint:disable-next-line:no-implicit-dependencies
import { shouldThrow } from '@typescript-plus/should-throw';
import { NoSubcommandError, parse, Sub } from '../../src';

// tslint:disable:max-classes-per-file

class Subcommand1 {}

class Subcommand2 {}

@Sub(Subcommand1)
@Sub(Subcommand2)
class Supercommand {}

it(__filename, async () => {
  let error;
  try {
    await shouldThrow(
      NoSubcommandError,
      async () => parse(new Supercommand(), []),
      (e: NoSubcommandError) => {
        expect(e.message).toEqual('Specify subcommand: subcommand1, subcommand2');
      }
    );
  } catch (err) {
    error = err;
  }
  expect(error).toBeUndefined();
});
