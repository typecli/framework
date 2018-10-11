export interface HelpOptions {
    caption?: string;
    footer?: string;
    header?: string;
}
export declare function Help(options?: HelpOptions): <T extends import("../types").ConstructorType>(constructor: T) => T;
