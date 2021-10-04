import { WORLD } from '../world';

export function exit(status = 0): void {
  WORLD.runSpaces[WORLD.runSpaces.length - 1].exit(status);
}
