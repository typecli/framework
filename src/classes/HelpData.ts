import { HelpOptions } from '../decorators/Help';
import { ClassDecoratorTargetType } from '../types';

export class HelpData {
  constructor(public target: ClassDecoratorTargetType, public options: HelpOptions) {}
}
