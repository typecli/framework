import { Memoize } from '@typescript-plus/fast-memoize-decorator';
import * as Case from 'case';
import { ContextClassType } from '../types';
import {
  ArgumentModelType, AttributeModel, OptionArrayModelType, OptionModelType, TerminatorModelType,
  VariadicArgumentsModelType
} from './AttributeModel';
import { FunctionalMap } from './FunctionalMap';
import { HandlerMethod } from './HandlerMethod';
import { HelpData } from './HelpData';
import { RunMethod } from './RunMethod';

export class ContextSpec {
  // tslint:disable-next-line:variable-name
  _parent?: ContextSpec;
  arguments = new FunctionalMap<string, ArgumentModelType>();
  attributeModels = new FunctionalMap<string, AttributeModel>();
  handlerMethods = new FunctionalMap<string, HandlerMethod>();
  helpData?: HelpData;
  options = new FunctionalMap<string, OptionModelType | OptionArrayModelType>();
  runMethod?: RunMethod;
  runSyncMethod?: RunMethod;
  subspecs: ContextSpec[] = [];
  terminator?: TerminatorModelType;
  variadicArguments?: VariadicArgumentsModelType;

  constructor(public klass: ContextClassType) {}

  @Memoize()
  get caption() {
    const help = this.helpData;
    return help ? help.options.caption : undefined;
  }

  @Memoize()
  get commandName() {
    return Case.kebab(this.klass.name);
  }

  get parent() {
    return this._parent;
  }

  set parent(v: ContextSpec | undefined) {
    this._parent = v;
  }

  addSubspec(spec: ContextSpec) {
    this.subspecs.push(spec);
    spec.parent = this;
  }

  createInstance() {
    return new this.klass();
  }

  setArgumentModel(model: ArgumentModelType) {
    this.attributeModels.set(model.key, model);
    this.arguments.set(model.key, model);
  }

  setHandlerMethod(handler: HandlerMethod) {
    this.handlerMethods.set(handler.targetKey, handler);
  }

  setHelpData(data: HelpData) {
    this.helpData = data;
  }

  setOptionModel(model: OptionModelType | OptionArrayModelType) {
    this.attributeModels.set(model.key, model);
    this.options.set(model.key, model);
  }

  setRunMethod(method: RunMethod) {
    this.runMethod = method;
  }

  setRunSyncMethod(method: RunMethod) {
    this.runSyncMethod = method;
  }

  setTerminatorModel(model: TerminatorModelType) {
    this.attributeModels.set(model.key, model);
    this.terminator = model;
  }

  setVariadicArgumentsModel(model: VariadicArgumentsModelType) {
    this.attributeModels.set(model.key, model);
    this.variadicArguments = model;
  }
}
