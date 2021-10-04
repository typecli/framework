import { CommandOptions } from '../decorators/Command';
import { ClassDecoratorTargetType } from '../types';

export class CommandData {
  constructor(public target: ClassDecoratorTargetType, public options: CommandOptions) {}
}
