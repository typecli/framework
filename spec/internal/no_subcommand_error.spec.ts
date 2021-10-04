import { shouldThrow } from '@typescript-plus/should-throw';
import { NoSubcommandError, parse, Sub } from '../../src';

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
      async () => {
        await parse(new Supercommand(), []);
      },
      (e) => Promise.resolve(expect(e.message).toEqual('Specify subcommand: subcommand1, subcommand2'))
    );
  } catch (err) {
    error = err;
  }
  expect(error).toBeUndefined();
});
