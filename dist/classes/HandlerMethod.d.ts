import { ContextType } from '../types';
export declare class HandlerMethod {
    targetKey: string;
    keyOrFn: string | (() => void);
    constructor(targetKey: string, keyOrFn: string | (() => void));
    call(context: ContextType): void;
}
