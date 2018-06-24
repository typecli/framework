import { ContextClassType, ContextType } from '../types';
import { ContextSpec } from './ContextSpec';
import { FunctionalMap } from './FunctionalMap';
import { RunSpace } from './RunSpace';

export class World {
  contexts: ContextType[] = [];
  contextSpecs = new FunctionalMap<ContextClassType, ContextSpec>();
  runSpaces: RunSpace[] = [];

  getContextSpecOfClass(klass: ContextClassType) {
    let spec = this.contextSpecs.get(klass);
    if (spec === undefined) {
      spec = new ContextSpec(klass);
      this.contextSpecs.set(klass, spec);
    }
    return spec;
  }
}
