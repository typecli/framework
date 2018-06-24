export declare type FunctionalMapCallback<K, V, RESULT> = (value: V, key: K, map: FunctionalMap<K, V>) => RESULT;
export declare type FunctionalMapCallbackWithIndex<K, V, RESULT> = (value: V, key: K, index: number, map: FunctionalMap<K, V>) => RESULT;
export declare class FunctionalMap<K, V> {
    _map: Map<K, V>;
    constructor();
    constructor(entries?: ReadonlyArray<[K, V]> | undefined);
    constructor(iterable: Iterable<[K, V]>);
    readonly size: number;
    copy(): FunctionalMap<K, V>;
    entries(): IterableIterator<[K, V]>;
    every(predicate: FunctionalMapCallback<K, V, any>): boolean;
    filter(predicate: FunctionalMapCallback<K, V, any>): FunctionalMap<K, V>;
    find(predicate: FunctionalMapCallback<K, V, any>): V | undefined;
    forEach(callbackfn: (value: V, key: K, map: FunctionalMap<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    set(key: K, value: V): this;
    some(predicate: FunctionalMapCallback<K, V, any>): boolean;
    values(): IterableIterator<V>;
}
