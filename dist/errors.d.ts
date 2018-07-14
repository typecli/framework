import { ArgumentModelType, AttributeModel, OptionArrayModelType, OptionModelType } from './classes/AttributeModel';
import { Parser } from './classes/Parser';
import { ClassDecoratorTargetType } from './types';
export declare abstract class ThisIsBugError extends Error {
    constructor();
}
export declare class MethodMustNotBeCalled extends ThisIsBugError {
}
export declare abstract class ParserError extends Error {
    parser: Parser;
    constructor(parser: Parser, message?: string);
}
export declare abstract class AttributeParserError<M extends AttributeModel> extends ParserError {
    attributeModel: M;
    constructor(parser: Parser, attributeModel: M, message?: string);
}
export declare abstract class MissingAttributeError<M extends AttributeModel> extends ParserError {
    model: M;
    constructor(parser: Parser, model: M);
    readonly message: string;
}
export declare class MissingArgumentError<M extends ArgumentModelType> extends MissingAttributeError<M> {
    model: M;
    constructor(parser: Parser, model: M);
    readonly message: string;
}
export declare class MissingOptionError<M extends OptionModelType> extends MissingAttributeError<M> {
    model: M;
    constructor(parser: Parser, model: M);
    readonly message: string;
}
export declare abstract class UndefinedAttributeValueError<M extends AttributeModel> extends AttributeParserError<M> {
    constructor(parser: Parser, model: M, message?: string);
}
export declare class UndefinedArgumentValueError<M extends ArgumentModelType> extends UndefinedAttributeValueError<M> {
    constructor(parser: Parser, model: M);
    readonly message: string;
}
export declare class UndefinedOptionValueError<M extends OptionModelType | OptionArrayModelType> extends UndefinedAttributeValueError<M> {
    optionName: string;
    constructor(parser: Parser, model: M, optionName: string);
}
export declare class MultipleParameterizedOptionsError extends ParserError {
    option1: OptionModelType | OptionArrayModelType;
    optionName1: string;
    option2: OptionModelType | OptionArrayModelType;
    optionName2: string;
    constructor(parser: Parser, option1: OptionModelType | OptionArrayModelType, optionName1: string, option2: OptionModelType | OptionArrayModelType, optionName2: string);
}
export declare class UnknownOptionError extends ParserError {
    parser: Parser;
    constructor(parser: Parser, name: string);
}
export declare class UnknownAttributeTypeError extends Error {
    constructor(target: ClassDecoratorTargetType, key: string, type: any);
}
