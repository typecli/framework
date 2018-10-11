import { ContextClassType } from '../types';
export declare class RunSpace {
    options: RunSpaceOptions;
    constructor(options: RunSpaceOptions);
    readonly throwsOnExit: boolean;
    exit(status?: number): void;
    run(contextClass: ContextClassType, args: string[]): Promise<void>;
    runSync(contextClass: ContextClassType, args: string[]): void;
    private _run;
    private _runSync;
}
export interface RunSpaceOptions {
    throwOnExit?: boolean;
}
