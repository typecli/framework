/// <reference types="node" />
import * as EventEmitterImpl from 'events';
import { ATTRIBUTE_PARSER_EVENT } from '../events';
import { AttributeModel } from './AttributeModel';
import { AttributeParserEvent, Event } from './Event';
export declare type EventListener<N extends string, E extends Event<N>> = (event: E, ...args: any[]) => void;
export declare type EventListenerWrapper<N extends string, E extends Event<N>> = (event: E, ...args: any[]) => void;
export declare type EventThisArgType = {};
export declare class EventEmitter<N extends string, E extends Event<N>> {
    emitter: EventEmitterImpl;
    listenerWrappers: Map<any, Map<any, any[]>>;
    addListenerWrapper(event: N, listener: EventListener<N, E>, wrapper: EventListenerWrapper<N, E>): void;
    emit(event: E, ...args: any[]): void;
    off(event: N, listener: EventListener<N, E>): void;
    on(event: N, listener: EventListener<N, E>): this;
    once(event: N, listener: EventListener<N, E>): this;
    removeListenerWrapper(event: N, listener: EventListener<N, E>): void;
}
export declare type AttributeParserEventListener<M extends AttributeModel> = EventListener<ATTRIBUTE_PARSER_EVENT, AttributeParserEvent<M>>;
export declare class AttributeParserEventEmitter<M extends AttributeModel> extends EventEmitter<ATTRIBUTE_PARSER_EVENT, AttributeParserEvent<M>> {
}
