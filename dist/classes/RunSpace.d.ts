import { ContextClassType } from '../types';
export declare class RunSpace {
    options: RunSpaceOptions;
    constructor(options: RunSpaceOptions);
    readonly throwsOnExit: boolean;
    exit(status?: number): void;
    run(contextClass: ContextClassType, args: string[]): void;
    runSync(contextClass: ContextClassType, args: string[]): void;
    private _run(contextSpec, args);
}
export interface RunSpaceOptions {
    throwOnExit?: boolean;
}
