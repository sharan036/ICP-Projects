import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Todo { 'value' : string, 'done' : boolean, 'index' : bigint }
export interface _SERVICE {
  'getArrayData' : ActorMethod<[], Array<Todo>>,
  'updateObject' : ActorMethod<[bigint, boolean], Array<Todo>>,
}
