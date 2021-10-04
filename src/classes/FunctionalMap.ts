import { IterableIterate } from './IterableIterate';

export type FunctionalMapCallback<K, V, RESULT> = (value: V, key: K, map: FunctionalMap<K, V>) => RESULT;
export type FunctionalMapCallbackWithIndex<K, V, RESULT> = (
  value: V,
  key: K,
  index: number,
  map: FunctionalMap<K, V>
) => RESULT;

export class FunctionalMap<K, V> {
  _map: Map<K, V>;

  constructor();
  constructor(entries?: ReadonlyArray<[K, V]> | undefined);
  constructor(iterable: Iterable<[K, V]>);
  constructor(arg?: Iterable<[K, V]> | ReadonlyArray<[K, V]> | undefined) {
    this._map = new Map<K, V>(arg as ReadonlyArray<[K, V]>);
  }

  get size(): number {
    return this._map.size;
  }

  copy(): FunctionalMap<K, V> {
    return new FunctionalMap<K, V>(this.entries());
  }

  entries(): IterableIterator<[K, V]> {
    return this._map.entries();
  }

  every(predicate: FunctionalMapCallback<K, V, unknown>): boolean {
    const it = new IterableIterate<[K, V], boolean>(this.entries());
    return it.iterate((item, index, breaker) => {
      const [k, v] = item;
      if (!predicate(v, k, this)) {
        breaker.break(false);
      }
    }, true);
  }

  filter(predicate: FunctionalMapCallback<K, V, unknown>): FunctionalMap<K, V> {
    const result = new FunctionalMap<K, V>();
    const it = new IterableIterate<[K, V], unknown>(this.entries());
    it.iterate((item) => {
      const [k, v] = item;
      if (predicate(v, k, this)) {
        result.set(k, v);
      }
    }, undefined);
    return result;
  }

  find(predicate: FunctionalMapCallback<K, V, unknown>): V | undefined {
    const it = new IterableIterate<[K, V], V | undefined>(this.entries());
    return it.iterate((item, index, breaker) => {
      const [k, v] = item;
      if (predicate(v, k, this)) {
        breaker.break(v);
      }
    }, undefined);
  }

  forEach(callbackfn: (value: V, key: K, map: FunctionalMap<K, V>) => void, thisArg?: unknown): void {
    this._map.forEach((value, key) => {
      callbackfn(value, key, this);
    }, thisArg);
  }

  get(key: K): V | undefined {
    return this._map.get(key);
  }

  set(key: K, value: V): this {
    this._map.set(key, value);
    return this;
  }

  some(predicate: FunctionalMapCallback<K, V, unknown>): boolean {
    const it = new IterableIterate<[K, V], boolean>(this.entries());
    return it.iterate((item, index, breaker) => {
      const [k, v] = item;
      if (predicate(v, k, this)) {
        breaker.break(true);
      }
    }, false);
  }

  values(): IterableIterator<V> {
    return this._map.values();
  }
}
