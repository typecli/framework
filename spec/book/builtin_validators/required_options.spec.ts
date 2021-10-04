import { shouldThrow } from '@typescript-plus/should-throw';
import { MissingOptionError, Option, parse } from '../../../src';

class Profile {
  @Option({ required: true })
  birthday!: string;
}

it('Book - Builtin Validators - Required Options', async () => {
  let error;
  try {
    await shouldThrow(
      MissingOptionError,
      async () => {
        await parse(new Profile(), []);
      },
      (e) => Promise.resolve(expect(e.message).toEqual('Missing option: --birthday'))
    );
  } catch (err) {
    error = err;
  }
  expect(error).toBeUndefined();
});
