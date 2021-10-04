export type ArgumentValueType = string;
export type OptionValueType = boolean | string;
export type ListOptionValueType = string[];
export type NamedParsedValueType = ArgumentValueType | OptionValueType | ListOptionValueType;

export type ContextType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  constructor: FunctionType;
};
export type ContextClassType = ConstructorType;

export type ClassDecoratorTargetType = ConstructorType;
export type PropertyDecoratorTargetType = { constructor: FunctionType };
export type InjectionTargetType = { [key: string]: unknown };

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ConstructorType = { new (...args: any[]): any };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PrototypeOwnerType = { prototype: any };
export type PrototypeOwnerConstructorType = ConstructorType & PrototypeOwnerType;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AbstructConstructorType = FunctionType & { prototype: any };
// eslint-disable-next-line @typescript-eslint/ban-types
export type FunctionType = Function;
