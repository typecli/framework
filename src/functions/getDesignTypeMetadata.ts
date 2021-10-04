import 'reflect-metadata';

export const getDesignTypeMetadata =
  Reflect && Reflect.getMetadata
    ? // eslint-disable-next-line @typescript-eslint/ban-types
      (target: object, key: string) => Reflect.getMetadata('design:type', target, key) as unknown
    : // eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-unused-vars
      (target: object, key: string) => undefined;
