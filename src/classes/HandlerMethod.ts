import { ContextType } from '../types';

export class HandlerMethod {
  constructor(public targetKey: string, public keyOrFn: string | (() => void)) {}

  call(context: ContextType) {
    const keyOrFn = this.keyOrFn;
    if (typeof keyOrFn === 'string') {
      (context as { [key: string]: () => void })[keyOrFn]();
    } else {
      keyOrFn.call(context);
    }
  }
}
