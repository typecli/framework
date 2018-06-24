export function wrapByArray<T>(v: T | T[] | undefined) {
  if (v instanceof Array) {
    return v;
  }
  if (v === undefined) {
    return new Array<T>();
  }
  return [v];
}
