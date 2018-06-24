import { HelpOptions } from '../decorators/Help';
import { ClassDecoratorTargetType } from '../types';
export declare class HelpData {
    target: ClassDecoratorTargetType;
    options: HelpOptions;
    constructor(target: ClassDecoratorTargetType, options: HelpOptions);
}
