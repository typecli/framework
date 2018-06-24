// tslint:disable-next-line:no-implicit-dependencies
import { shouldThrow } from '@typescript-plus/should-throw';
import { Argument, MissingAttributeError, parse } from '../../../src';

class Compile {
  @Argument({ required: true })
  sourceFile!: string;
}

it('Book - Builtin Validators - Required Arguments', async () => {
  let error;
  try {
    await shouldThrow(MissingAttributeError, async () => parse(new Compile(), []));
  } catch (err) {
    error = err;
  }
  expect(error).toBeUndefined();
});
