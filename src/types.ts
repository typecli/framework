// tslint:disable:interface-over-type-literal

// export type AttributeAccessorType = { [key: string]: any };
// export type AttributeAccessorClassType = ConstructorType;

export type ArgumentValueType = string;
export type OptionValueType = boolean | string;
export type ListOptionValueType = string[];
export type NamedParsedValueType = ArgumentValueType | OptionValueType | ListOptionValueType;

export type ContextType = {
  [key: string]: any;
  constructor: FunctionType;
};
export type ContextClassType = ConstructorType;

export type ClassDecoratorTargetType = ConstructorType;
export type PropertyDecoratorTargetType = { constructor: FunctionType };
export type InjectionTargetType = { [key: string]: any };

export type ClassDecoratorType = <T extends ClassDecoratorTargetType>(constructor: T) => T;
export type PropertyDecoratorType = (
  target: PropertyDecoratorTargetType,
  propertyKey: string,
  descriptor?: PropertyDescriptor
) => void;
export type MethodDecoratorType = (
  target: PropertyDecoratorTargetType,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => void;

export type ConstructorType = { new (...args: any[]): any };
export type PrototypeOwnerType = { prototype: any };
export type PrototypeOwnerConstructorType = ConstructorType & PrototypeOwnerType;
export type AbstructConstructorType = FunctionType & { prototype: any };
// tslint:disable-next-line:ban-types
export type FunctionType = Function;
