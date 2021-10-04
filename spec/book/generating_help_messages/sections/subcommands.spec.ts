import { capture } from '@typescript-plus/stream-capture';
import { generateHelp, Help, Sub } from '../../../../src';

@Help({ caption: 'Made with Sachinoka strawberry.' })
class Strawberry {}

@Help({ caption: 'New York style.' })
class Cheese {}

@Help({ caption: 'Winter only.' })
class Chocolat {}

@Sub(Strawberry)
@Sub(Cheese)
@Sub(Chocolat)
class Cake {}

it(__filename, () => {
  const captured = capture(process.stdout, (buffer) => {
    console.log(generateHelp(Cake));
    return buffer.join('');
  });
  expect(captured).toEqual(`cake SUBCOMMAND

Subcommands:
  cheese      New York style.
  chocolat    Winter only.
  strawberry  Made with Sachinoka strawberry.
`);
});
