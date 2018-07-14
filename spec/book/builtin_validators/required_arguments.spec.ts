// tslint:disable-next-line:no-implicit-dependencies
import { shouldThrow } from '@typescript-plus/should-throw';
import { Argument, MissingArgumentError, MissingAttributeError, parse } from '../../../src';

class Compile {
  @Argument({ required: true })
  sourceFile!: string;
}

it('Book - Builtin Validators - Required Arguments', async () => {
  let error;
  try {
    await shouldThrow(
      MissingArgumentError,
      async () => parse(new Compile(), []),
      (e: MissingAttributeError<any>) => {
        expect(e.message).toEqual('Missing argument: SOURCE_FILE');
      }
    );
  } catch (err) {
    error = err;
  }
  expect(error).toBeUndefined();
});
