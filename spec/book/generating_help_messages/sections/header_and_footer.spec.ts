// tslint:disable-next-line:no-implicit-dependencies
import { capture } from '@typescript-plus/stream-capture';
import { Argument, generateHelp, Help } from '../../../../src';

// tslint:disable:member-ordering
// tslint:disable:no-console

@Help({ header: ':)', footer: '© mosop' })
class Hello {
  @Argument({ required: true, desc: 'Who you want to talk to.' })
  to!: string;
}

it(__filename, () => {
  const captured = capture(process.stdout, buffer => {
    console.log(generateHelp(Hello));
    return buffer.join('');
  });
  expect(captured).toEqual(`hello TO

:)

Arguments:
  TO  Who you want to talk to.

© mosop
`);
});
