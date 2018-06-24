export declare type ArgumentValueType = string;
export declare type OptionValueType = boolean | string;
export declare type ListOptionValueType = string[];
export declare type NamedParsedValueType = ArgumentValueType | OptionValueType | ListOptionValueType;
export declare type ContextType = {
    [key: string]: any;
    constructor: FunctionType;
};
export declare type ContextClassType = ConstructorType;
export declare type ClassDecoratorTargetType = ConstructorType;
export declare type PropertyDecoratorTargetType = {
    constructor: FunctionType;
};
export declare type InjectionTargetType = {
    [key: string]: any;
};
export declare type ClassDecoratorType = <T extends ClassDecoratorTargetType>(constructor: T) => T;
export declare type PropertyDecoratorType = (target: PropertyDecoratorTargetType, propertyKey: string, descriptor?: PropertyDescriptor) => void;
export declare type MethodDecoratorType = (target: PropertyDecoratorTargetType, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare type ConstructorType = {
    new (...args: any[]): any;
};
export declare type PrototypeOwnerType = {
    prototype: any;
};
export declare type PrototypeOwnerConstructorType = ConstructorType & PrototypeOwnerType;
export declare type AbstructConstructorType = FunctionType & {
    prototype: any;
};
export declare type FunctionType = Function;
