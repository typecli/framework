import { ContextClassType, ContextType } from '../types';
import { ContextSpec } from './ContextSpec';
import { FunctionalMap } from './FunctionalMap';
import { RunSpace } from './RunSpace';
export declare class World {
    contexts: ContextType[];
    contextSpecs: FunctionalMap<new (...args: any[]) => any, ContextSpec>;
    runSpaces: RunSpace[];
    getContextSpecOfClass(klass: ContextClassType): ContextSpec;
}
