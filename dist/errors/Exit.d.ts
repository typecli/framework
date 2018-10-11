export declare class Exit extends Error {
    status: number;
    exitMessage?: string | undefined;
    constructor(status: number, exitMessage?: string | undefined);
}
