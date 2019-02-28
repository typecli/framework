import { PropertyDecoratorTargetType } from '../types';
export interface OptionOptions {
    default?: any;
    desc?: string;
    name?: string | string[];
    not?: string | string[];
    required?: boolean;
    type?: any;
}
export declare function Option(options?: OptionOptions): (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor | undefined) => void;
