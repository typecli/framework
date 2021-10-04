import * as child_process from 'child_process';
import * as path from 'path';

it(__filename, () => {
  const result = child_process.spawnSync(
    'npx',
    ['ts-node', path.join(__dirname, 'witho_an_explicit_status', 'run.ts')],
    {
      env: process.env,
    }
  );
  expect(result.status).toEqual(1);
});
