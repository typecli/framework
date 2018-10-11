import { exit } from '../functions/exit';
import { generateHelp } from '../functions/generateHelp';
import { ClassDecoratorTargetType } from '../types';
import { Handler } from './Handler';
import { Option } from './Option';

export interface ShowHelpOptions {
  desc?: string;
  name?: string[];
}

export function ShowHelp(options?: ShowHelpOptions) {
  return <T extends ClassDecoratorTargetType>(constructor: T) => {
    // tslint:disable-next-line:no-parameter-reassignment
    options = options ? options : {};
    const name: string[] = options.name === undefined ? ['-h', '--help'] : options.name;
    const desc: string = options.desc === undefined ? 'Show this help.' : options.desc;
    Option({ name, desc, type: Boolean })({ constructor }, '@help');
    Handler(() => {
      process.stdout.write(generateHelp(constructor));
      process.stdout.write('\n');
      exit();
    })({ constructor }, 'on@help');
    return constructor;
  };
}
