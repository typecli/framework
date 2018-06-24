import { PropertyDecoratorTargetType } from '../types';
export interface ArgumentOptions {
    desc?: string;
    required?: boolean;
    type?: any;
    variableName?: string;
}
export declare function Argument(options?: ArgumentOptions): (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor | undefined) => void;
