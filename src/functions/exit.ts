import { WORLD } from '../world';

export function exit(status = 0) {
  WORLD.runSpaces[WORLD.runSpaces.length - 1].exit(status);
}
