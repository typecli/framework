import { Es5BuiltinClass } from '@typescript-plus/builtin-class-decorator';
import { AttributeModel } from './classes/AttributeModel';
import { ArgumentModelType, OptionArrayModelType, OptionModelType } from './classes/attribute_model/types';
import { ContextSpec } from './classes/ContextSpec';
import { Parser } from './classes/Parser';
import { ClassDecoratorTargetType } from './types';

@Es5BuiltinClass()
export abstract class ThisIsBugError extends Error {
  constructor() {
    super('This is an unknown bug. Please report to https://github.com/typecli/framework/issues.');
  }
}

export class MethodMustNotBeCalled extends ThisIsBugError {}

@Es5BuiltinClass()
export abstract class ParserError extends Error {
  constructor(public parser: Parser, message?: string) {
    super(message);
  }
}

export abstract class AttributeParserError<M extends AttributeModel> extends ParserError {
  constructor(parser: Parser, public attributeModel: M, message?: string) {
    super(parser, message);
  }
}

export abstract class MissingAttributeError<M extends AttributeModel> extends ParserError {
  constructor(parser: Parser, public model: M) {
    super(parser);
  }

  get message(): string {
    return `Missing :`;
  }
}

export class MissingArgumentError<M extends ArgumentModelType> extends MissingAttributeError<M> {
  constructor(parser: Parser, public model: M) {
    super(parser, model);
  }

  get message(): string {
    return `Missing argument: ${this.model.variableName}`;
  }
}

export class MissingOptionError<M extends OptionModelType> extends MissingAttributeError<M> {
  constructor(parser: Parser, public model: M) {
    super(parser, model);
  }

  get message(): string {
    return `Missing option: ${this.model.optionNames[0]}`;
  }
}

export class NoSubcommandError extends ParserError {
  constructor(parser: Parser, contextSpec: ContextSpec) {
    super(
      parser,
      `Specify subcommand: ${contextSpec.subspecs
        .map((e) => e.commandName)
        .sort()
        .join(', ')}`
    );
  }
}

export abstract class UndefinedAttributeValueError<M extends AttributeModel> extends AttributeParserError<M> {
  constructor(parser: Parser, model: M, message?: string) {
    super(parser, model, message);
  }
}

export class UndefinedArgumentValueError<M extends ArgumentModelType> extends UndefinedAttributeValueError<M> {
  constructor(parser: Parser, model: M) {
    super(parser, model);
  }

  get message(): string {
    return `Undefined argument: ${this.attributeModel.variableName}`;
  }
}

export class UndefinedOptionValueError<
  M extends OptionModelType | OptionArrayModelType
> extends UndefinedAttributeValueError<M> {
  constructor(parser: Parser, model: M, public optionName: string) {
    super(parser, model, `Undefined option: ${optionName}`);
  }
}

export class MultipleParameterizedOptionsError extends ParserError {
  constructor(
    parser: Parser,
    public option1: OptionModelType | OptionArrayModelType,
    public optionName1: string,
    public option2: OptionModelType | OptionArrayModelType,
    public optionName2: string
  ) {
    super(parser, `Can't specify both of these options: ${optionName1} and ${optionName2}`);
  }
}

export class UnknownOptionError extends ParserError {
  constructor(public parser: Parser, name: string) {
    super(parser, `Unknown option: ${name}`);
  }
}

@Es5BuiltinClass()
export class UnknownAttributeTypeError extends Error {
  constructor(target: ClassDecoratorTargetType, key: string, type: unknown) {
    super(`Unknown attribute type: ${type as string} (${key} in ${target as unknown as string})`);
  }
}
