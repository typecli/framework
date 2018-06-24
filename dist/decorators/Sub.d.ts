import { ContextClassType } from '../types';
export declare function Sub(klass: ContextClassType): <T extends new (...args: any[]) => any>(constructor: T) => T;
