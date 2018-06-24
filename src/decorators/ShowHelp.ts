import { exit } from '../functions/exit';
import { generateHelp } from '../functions/generateHelp';
import { ClassDecoratorTargetType } from '../types';
import { Handler } from './Handler';
import { Option } from './Option';

export function ShowHelp() {
  return <T extends ClassDecoratorTargetType>(constructor: T) => {
    Option({ name: ['-h', '--help'], desc: 'Show this help.', type: Boolean })({ constructor }, '@help');
    Handler(() => {
      process.stdout.write(generateHelp(constructor));
      process.stdout.write('\n');
      exit();
    })({ constructor }, 'on@help');
    return constructor;
  };
}
