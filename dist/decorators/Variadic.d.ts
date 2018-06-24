import { PropertyDecoratorTargetType } from '../types';
export interface VariadicOptions {
    min?: number;
    type?: any;
}
export declare function Variadic(options?: VariadicOptions): (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor | undefined) => void;
