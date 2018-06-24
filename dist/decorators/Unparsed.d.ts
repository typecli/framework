import { PropertyDecoratorTargetType } from '../types';
export interface UnparsedOptions {
}
export declare function Unparsed(keywords: string[], options?: UnparsedOptions): (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor | undefined) => void;
