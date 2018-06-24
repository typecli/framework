export declare class IterableIterate<ITEM, RESULT> {
    iterator: Iterator<ITEM>;
    constructor(iterator: Iterator<ITEM>);
    iterate(callback: (item: ITEM, index: number, breaker: {
        break(result: RESULT): void;
    }) => void, defaultResult: RESULT): RESULT;
}
