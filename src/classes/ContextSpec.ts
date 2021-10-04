import { Memoize } from '@typescript-plus/fast-memoize-decorator';
import * as Case from 'case';
import { ContextClassType } from '../types';
import {
  ArgumentModelType,
  AttributeModel,
  OptionArrayModelType,
  OptionModelType,
  TerminatorModelType,
  VariadicArgumentsModelType,
} from './AttributeModel';
import { FunctionalMap } from './FunctionalMap';
import { HandlerMethod } from './HandlerMethod';
import { HelpData } from './HelpData';
import { RunMethod } from './RunMethod';

export class ContextSpec {
  _parent?: ContextSpec | undefined;
  arguments = new FunctionalMap<string, ArgumentModelType>();
  attributeModels = new FunctionalMap<string, AttributeModel>();
  handlerMethods = new FunctionalMap<string, HandlerMethod>();
  helpData?: HelpData;
  options = new FunctionalMap<string, OptionModelType | OptionArrayModelType>();
  runMethod?: RunMethod;
  subspecs: ContextSpec[] = [];
  terminator?: TerminatorModelType;
  variadicArguments?: VariadicArgumentsModelType;

  constructor(public klass: ContextClassType) {}

  @Memoize()
  get caption(): string | undefined {
    const help = this.helpData;
    return help ? help.options.caption : undefined;
  }

  @Memoize()
  get commandName(): string {
    return Case.kebab(this.klass.name);
  }

  get parent(): ContextSpec | undefined {
    return this._parent;
  }

  set parent(v: ContextSpec | undefined) {
    this._parent = v;
  }

  addSubspec(spec: ContextSpec): void {
    this.subspecs.push(spec);
    spec.parent = this;
  }

  createInstance(): unknown {
    return new this.klass();
  }

  setArgumentModel(model: ArgumentModelType): void {
    this.attributeModels.set(model.key, model);
    this.arguments.set(model.key, model);
  }

  setHandlerMethod(handler: HandlerMethod): void {
    this.handlerMethods.set(handler.targetKey, handler);
  }

  setHelpData(data: HelpData): void {
    this.helpData = data;
  }

  setOptionModel(model: OptionModelType | OptionArrayModelType): void {
    this.attributeModels.set(model.key, model);
    this.options.set(model.key, model);
  }

  setRunMethod(method: RunMethod): void {
    this.runMethod = method;
  }

  setTerminatorModel(model: TerminatorModelType): void {
    this.attributeModels.set(model.key, model);
    this.terminator = model;
  }

  setVariadicArgumentsModel(model: VariadicArgumentsModelType): void {
    this.attributeModels.set(model.key, model);
    this.variadicArguments = model;
  }
}
