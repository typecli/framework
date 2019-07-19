import * as EventEmitterImpl from 'events';
import { ATTRIBUTE_PARSER_EVENT } from '../events';
import { AttributeModel } from './AttributeModel';
import { AttributeParserEvent, Event } from './Event';

// tslint:disable:max-classes-per-file

export type EventListener<N extends string, E extends Event<N>> = (event: E, ...args: any[]) => void;
export type EventListenerWrapper<N extends string, E extends Event<N>> = (event: E, ...args: any[]) => void;
// tslint:disable-next-line:interface-over-type-literal
export type EventThisArgType = {};

export class EventEmitter<N extends string, E extends Event<N>> {
  emitter = new EventEmitterImpl();
  listenerWrappers = new Map<any, Map<any, any[]>>();

  addListenerWrapper(event: N, listener: EventListener<N, E>, wrapper: EventListenerWrapper<N, E>) {
    let listeners = this.listenerWrappers.get(event);
    if (!listeners) {
      listeners = new Map<any, any[]>();
      this.listenerWrappers.set(event, listeners);
    }
    let wrappers = listeners.get(listener);
    if (!wrappers) {
      wrappers = [];
      listeners.set(listener, wrappers);
    }
    wrappers.push(wrapper);
  }

  emit(event: E, ...args: any[]) {
    this.emitter.emit(event.name, event, ...args);
  }

  off(event: N, listener: EventListener<N, E>) {
    this.removeListenerWrapper(event, listener);
  }

  on(event: N, listener: EventListener<N, E>) {
    const wrapper = (...args: [E, ...any[]]) => {
      listener.apply(undefined, args);
    };
    this.emitter.on(event, wrapper);
    this.addListenerWrapper(event, listener, wrapper);
    return this;
  }

  once(event: N, listener: EventListener<N, E>) {
    const wrapper = (...args: [E, ...any[]]) => {
      listener.apply(undefined, args);
    };
    this.emitter.once(event, wrapper);
    this.addListenerWrapper(event, listener, wrapper);
    return this;
  }

  removeListenerWrapper(event: N, listener: EventListener<N, E>) {
    const listeners = this.listenerWrappers.get(event);
    if (listeners) {
      const wrappers = listeners.get(listener);
      if (wrappers) {
        wrappers.forEach(e => {
          this.emitter.removeListener(event, e as EventListener<N, E>);
        });
      }
    }
  }
}

export type AttributeParserEventListener<M extends AttributeModel> = EventListener<
  ATTRIBUTE_PARSER_EVENT,
  AttributeParserEvent<M>
>;

export class AttributeParserEventEmitter<M extends AttributeModel> extends EventEmitter<
  ATTRIBUTE_PARSER_EVENT,
  AttributeParserEvent<M>
> {}
