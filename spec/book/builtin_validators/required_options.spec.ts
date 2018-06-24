// tslint:disable-next-line:no-implicit-dependencies
import { shouldThrow } from '@typescript-plus/should-throw';
import { MissingAttributeError, Option, parse } from '../../../src';

class Profile {
  @Option({ required: true })
  birthday!: string;
}

it('Book - Builtin Validators - Required Options', async () => {
  let error;
  try {
    await shouldThrow(MissingAttributeError, async () => parse(new Profile(), []));
  } catch (err) {
    error = err;
  }
  expect(error).toBeUndefined();
});
