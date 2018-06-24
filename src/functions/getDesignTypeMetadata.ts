// tslint:disable-next-line:no-import-side-effect
import 'reflect-metadata';

export const getDesignTypeMetadata =
  // tslint:disable-next-line:strict-boolean-expressions
  Reflect && Reflect.getMetadata
    ? // tslint:disable-next-line:no-unsafe-any
      (target: object, key: string) => Reflect.getMetadata('design:type', target, key)
    : (target: object, key: string) => undefined;
