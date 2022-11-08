import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerUser = {
  readonly id: string;
  readonly name?: string | null;
  readonly active?: boolean | null;
  readonly renewDate?: string | null;
  readonly kickboxing?: number | null;
  readonly kidsGi?: number | null;
  readonly kidsNogi?: number | null;
  readonly littleGi?: number | null;
  readonly littleNogi?: number | null;
  readonly secretGi?: number | null;
  readonly secretNogi?: number | null;
  readonly luta?: number | null;
  readonly bjj?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly name?: string | null;
  readonly active?: boolean | null;
  readonly renewDate?: string | null;
  readonly kickboxing?: number | null;
  readonly kidsGi?: number | null;
  readonly kidsNogi?: number | null;
  readonly littleGi?: number | null;
  readonly littleNogi?: number | null;
  readonly secretGi?: number | null;
  readonly secretNogi?: number | null;
  readonly luta?: number | null;
  readonly bjj?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}