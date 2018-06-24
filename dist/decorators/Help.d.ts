export interface HelpOptions {
    caption?: string;
    footer?: string;
    header?: string;
}
export declare function Help(options?: HelpOptions): <T extends new (...args: any[]) => any>(constructor: T) => T;
