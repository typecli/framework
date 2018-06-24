import { PropertyDecoratorTargetType } from '../types';
export interface OptionsOptions {
    names?: string[];
    required?: boolean;
    type?: any;
}
export declare function Options(type: any, options?: OptionsOptions): (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor | undefined) => void;
