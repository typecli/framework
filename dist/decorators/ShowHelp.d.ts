export interface ShowHelpOptions {
    desc?: string;
    name?: string[];
}
export declare function ShowHelp(options?: ShowHelpOptions): <T extends import("../types").ConstructorType>(constructor: T) => T;
