// tslint:disable-next-line:no-implicit-dependencies
import { shouldThrow } from '@typescript-plus/should-throw';
import { MissingAttributeError, MissingOptionError, Option, parse } from '../../../src';

class Profile {
  @Option({ required: true })
  birthday!: string;
}

it('Book - Builtin Validators - Required Options', async () => {
  let error;
  try {
    await shouldThrow(
      MissingOptionError,
      async () => parse(new Profile(), []),
      (e: MissingAttributeError<any>) => {
        expect(e.message).toEqual('Missing option: --birthday');
      }
    );
  } catch (err) {
    error = err;
  }
  expect(error).toBeUndefined();
});
