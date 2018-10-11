import { ContextClassType, ContextType } from '../types';
import { ContextSpec } from './ContextSpec';
import { FunctionalMap } from './FunctionalMap';
import { RunSpace } from './RunSpace';
export declare class World {
    contexts: ContextType[];
    contextSpecs: FunctionalMap<import("../types").ConstructorType, ContextSpec>;
    runSpaces: RunSpace[];
    getContextSpecOfClass(klass: ContextClassType): ContextSpec;
}
