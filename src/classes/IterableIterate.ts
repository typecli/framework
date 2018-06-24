export class IterableIterate<ITEM, RESULT> {
  constructor(public iterator: Iterator<ITEM>) {}

  iterate(
    callback: (item: ITEM, index: number, breaker: { break(result: RESULT): void }) => void,
    defaultResult: RESULT
  ): RESULT {
    for (let i = 0; ; ++i) {
      const it = this.iterator.next();
      if (it.done) {
        return defaultResult;
      }
      // tslint:disable-next-line:variable-name
      let _break = false;
      // tslint:disable-next-line:variable-name
      let _result!: RESULT;
      callback(it.value, i, {
        break(result: RESULT) {
          _break = true;
          _result = result;
        }
      });
      if (_break) {
        return _result;
      }
    }
  }
}
