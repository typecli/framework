import { PropertyDecoratorTargetType } from '../types';
export declare function Handler(fn?: () => void): (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor | undefined) => void;
