export interface ShowVersionOptions {
    desc?: string;
    name?: string[];
}
export declare function ShowVersion(version: string, options?: ShowVersionOptions): <T extends import("../types").ConstructorType>(constructor: T) => T;
