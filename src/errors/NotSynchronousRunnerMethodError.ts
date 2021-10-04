export class NotSynchronousRunnerMethodError extends Error {
  constructor() {
    super('Asynchronous runner method was called in synchronous context.');
  }
}
