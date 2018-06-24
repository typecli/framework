import * as child_process from 'child_process';
import * as path from 'path';

// tslint:disable:member-ordering
// tslint:disable:no-console
// tslint:disable:max-classes-per-file

it(__filename, () => {
  const result = child_process.spawnSync(
    'npx',
    ['ts-node', path.join(__dirname, 'without_explicit_statuses', 'run.ts')],
    {
      env: process.env
    }
  );
  expect(result.status).toEqual(0);
});
