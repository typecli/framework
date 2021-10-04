import { exit } from '../functions/exit';
import { ClassDecoratorTargetType } from '../types';
import { Handler } from './Handler';
import { Option } from './Option';

export interface ShowVersionOptions {
  desc?: string;
  name?: string[];
}

export function ShowVersion(version: string, options?: ShowVersionOptions) {
  return <T extends ClassDecoratorTargetType>(constructor: T): T => {
    options = options ? options : {};
    const name: string[] = options.name === undefined ? ['--version'] : options.name;
    const desc: string = options.desc === undefined ? 'Show version.' : options.desc;
    Option({ name, desc, type: Boolean })({ constructor }, '@version');
    Handler(() => {
      process.stdout.write(version);
      process.stdout.write('\n');
      exit();
    })({ constructor }, 'on@version');
    return constructor;
  };
}
