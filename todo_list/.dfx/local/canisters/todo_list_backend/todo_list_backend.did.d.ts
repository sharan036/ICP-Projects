import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Todo { 'value' : string, 'done' : boolean }
export interface _SERVICE {
  'getArrayData' : ActorMethod<[], Array<Todo>>,
  'storeArray' : ActorMethod<[Array<Todo>], Array<Todo>>,
}
