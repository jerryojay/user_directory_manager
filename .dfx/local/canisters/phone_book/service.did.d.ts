import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Entry {
  'age' : bigint,
  'desc' : string,
  'time' : Time,
  'gender' : Gender,
  'phone_number' : Phone,
  'location' : string,
}
export type Gender = { 'female' : null } |
  { 'male' : null };
export type Name = string;
export type Phone = string;
export type Result = { 'ok' : string } |
  { 'err' : string };
export type Time = bigint;
export interface _SERVICE {
  'delete_user' : ActorMethod<[Name], undefined>,
  'get_num_users' : ActorMethod<[], bigint>,
  'insert' : ActorMethod<[Name, Entry], undefined>,
  'intialize_args' : ActorMethod<[Entry], Result>,
  'lookup' : ActorMethod<[Name], [] | [Entry]>,
  'pop_retrieve_user' : ActorMethod<[Name], [] | [Entry]>,
  'update_user_data' : ActorMethod<[Name, Entry], [] | [Entry]>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
