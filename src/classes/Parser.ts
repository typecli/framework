import { Memoize } from '@typescript-plus/fast-memoize-decorator';
import { ContextSpec } from '../classes/ContextSpec';
import { MultipleParameterizedOptionsError, NoSubcommandError, UnknownOptionError } from '../errors';
import { ATTRIBUTE_PARSER_EVENT } from '../events';
import { ConstructorType, ContextType } from '../types';
import { WORLD } from '../world';
import { ArgumentModelType, OptionArrayModelType, OptionModelType } from './AttributeModel';
import { ParserCursor } from './ParserCursor';

export class Parser {
  contextSpec: ContextSpec;
  cursor = new ParserCursor(this);
  subcontextSpec?: ContextSpec;
  terminated = false;

  constructor(public context: ContextType, public args: string[]) {
    this.contextSpec = WORLD.getContextSpecOfClass(context.constructor as ConstructorType);
  }

  @Memoize()
  get ramainingArguments(): ArgumentModelType[] {
    return Array.from(this.contextSpec.arguments.values());
  }

  callOptionHandler(option: OptionModelType | OptionArrayModelType): void {
    const method = this.contextSpec.handlerMethods.get(option.key);
    if (method !== undefined) {
      method.call(this.context);
    }
  }

  initializeAttributes(): void {
    this.contextSpec.attributeModels.forEach((attribute) => {
      attribute.emitParserEvent(ATTRIBUTE_PARSER_EVENT.BEFORE_INITIALIZE, this);
    });
    this.contextSpec.attributeModels.forEach((attribute) => {
      attribute.emitParserEvent(ATTRIBUTE_PARSER_EVENT.INITIALIZE, this);
    });
    this.contextSpec.attributeModels.forEach((attribute) => {
      attribute.emitParserEvent(ATTRIBUTE_PARSER_EVENT.AFTER_INITIALIZE, this);
    });
  }

  parse(): Promise<void> {
    this.parseSync();
    return Promise.resolve();
  }

  parseArgs(): void {
    for (
      let arg = this.cursor.at(0);
      arg !== undefined && !this.terminated && this.subcontextSpec === undefined;
      arg = this.cursor.at(0)
    ) {
      this.parseNext(arg);
    }
  }

  parseArgument(arg: string): void {
    const model = this.ramainingArguments.shift();
    if (model) {
      this.parseNamedArgument(model);
    } else {
      this.parseNamelessArgument(arg);
    }
  }

  parseLongOption(arg: string): void {
    const parsed = this.contextSpec.options.find((option) => {
      if (!option.optionNameMatches(arg)) {
        return false;
      }
      this.callOptionHandler(option);
      this.cursor.next(option.extractOptionAndStore(this, arg));
      return true;
    });
    if (!parsed) {
      throw new UnknownOptionError(this, arg);
    }
  }

  parseNamedArgument(model: ArgumentModelType): void {
    this.cursor.next(model.extractArgumentAndStore(this));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parseNamelessArgument(arg: string): void {
    const model = this.contextSpec.variadicArguments;
    if (model) {
      this.cursor.next(model.extractArgumentAndStore(this));
    } else {
      this.cursor.next(1);
    }
  }

  parseNext(arg: string): void {
    if (this.parseTerminator(arg)) {
      //
    } else if (this.parseSubcontextSpecs(arg)) {
      //
    } else if (arg.startsWith('--')) {
      this.parseLongOption(arg);
    } else if (arg.startsWith('-')) {
      this.parseShortOption(arg);
    } else {
      this.parseArgument(arg);
    }
  }

  parseShortOption(arg: string): void {
    const names = arg.slice(1).split('');
    let parameterized: OptionModelType | OptionArrayModelType | undefined;
    let parameterizedName: string | undefined;
    let size = 0;
    names.forEach((name) => {
      const dashedName = `-${name}`;
      const resolved = this.contextSpec.options.some((option) => {
        if (!option.optionNameMatches(dashedName)) {
          return false;
        }
        this.callOptionHandler(option);
        if (option.hasOptionParameter) {
          if (parameterized !== undefined) {
            throw new MultipleParameterizedOptionsError(
              this,
              parameterized,
              parameterizedName as string,
              option,
              dashedName
            );
          }
          parameterized = option;
          parameterizedName = dashedName;
        }
        size = Math.max(size, option.extractOptionAndStore(this, dashedName));
        return true;
      });
      if (!resolved) {
        throw new UnknownOptionError(this, dashedName);
      }
    });
    this.cursor.next(size);
  }

  parseSubcontextSpecs(arg: string): boolean {
    const found = this.contextSpec.subspecs.find((e) => e.commandName === arg);
    if (found) {
      this.subcontextSpec = found;
      this.cursor.next(1);
      return true;
    }
    return false;
  }

  parseSync(): void {
    this.initializeAttributes();
    this.parseArgs();
    this.validate();
  }

  parseTerminator(arg: string): boolean {
    const terminator = this.contextSpec.terminator;
    if (terminator) {
      if (terminator.terminatorKeywordMatches(arg)) {
        this.context[terminator.key] = this.cursor.slice(1);
        this.cursor.next(1);
        return true;
      }
    }
    return false;
  }

  validate(): void {
    if (this.subcontextSpec === undefined && this.contextSpec.subspecs.length > 0) {
      throw new NoSubcommandError(this, this.contextSpec);
    }
    this.contextSpec.attributeModels.forEach((v) => {
      v.emitParserEvent(ATTRIBUTE_PARSER_EVENT.BEFORE_VALIDATE, this);
    });
    this.contextSpec.attributeModels.forEach((v) => {
      v.emitParserEvent(ATTRIBUTE_PARSER_EVENT.VALIDATE, this);
    });
    this.contextSpec.attributeModels.forEach((v) => {
      v.emitParserEvent(ATTRIBUTE_PARSER_EVENT.AFTER_INITIALIZE, this);
    });
  }
}
