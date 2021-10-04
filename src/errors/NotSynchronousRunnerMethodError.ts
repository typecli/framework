import { Es5BuiltinClass } from '@typescript-plus/builtin-class-decorator';

@Es5BuiltinClass()
export class NotSynchronousRunnerMethodError extends Error {
  constructor() {
    super('Asynchronous runner method was called in synchronous context.');
  }
}
