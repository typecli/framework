import { Option, parseSync } from '../../../../src';

class Color {
  @Option() r!: string;
  @Option() g!: string;
  @Option() b!: string;
}

it('README - Features - Structured Syntax Model - Options', () => {
  const args = new Color();
  parseSync(args, ['-r', '85', '-g', '107', '-b', '47']);
  expect(args.r).toEqual('85');
  expect(args.g).toEqual('107');
  expect(args.b).toEqual('47');
});
