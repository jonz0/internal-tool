import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type DayMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AttendeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMonthMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerDay = {
  readonly id: string;
  readonly classes?: (Class | null)[] | null;
  readonly date?: string | null;
  readonly open?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDay = {
  readonly id: string;
  readonly classes: AsyncCollection<Class>;
  readonly date?: string | null;
  readonly open?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Day = LazyLoading extends LazyLoadingDisabled ? EagerDay : LazyDay

export declare const Day: (new (init: ModelInit<Day, DayMetaData>) => Day) & {
  copyOf(source: Day, mutator: (draft: MutableModel<Day, DayMetaData>) => MutableModel<Day, DayMetaData> | void): Day;
}

type EagerClass = {
  readonly id: string;
  readonly name?: string | null;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly type?: string | null;
  readonly age?: string | null;
  readonly maxSpots?: number | null;
  readonly openSpots?: number | null;
  readonly classOpen?: boolean | null;
  readonly day?: Day | null;
  readonly attendees?: (Attendee | null)[] | null;
  readonly message?: string | null;
  readonly instructor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClass = {
  readonly id: string;
  readonly name?: string | null;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly type?: string | null;
  readonly age?: string | null;
  readonly maxSpots?: number | null;
  readonly openSpots?: number | null;
  readonly classOpen?: boolean | null;
  readonly day: AsyncItem<Day | undefined>;
  readonly attendees: AsyncCollection<Attendee>;
  readonly message?: string | null;
  readonly instructor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Class = LazyLoading extends LazyLoadingDisabled ? EagerClass : LazyClass

export declare const Class: (new (init: ModelInit<Class, ClassMetaData>) => Class) & {
  copyOf(source: Class, mutator: (draft: MutableModel<Class, ClassMetaData>) => MutableModel<Class, ClassMetaData> | void): Class;
}

type EagerAttendee = {
  readonly id: string;
  readonly class?: Class | null;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly jjbelt?: number | null;
  readonly llbelt?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttendee = {
  readonly id: string;
  readonly class: AsyncItem<Class | undefined>;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly jjbelt?: number | null;
  readonly llbelt?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Attendee = LazyLoading extends LazyLoadingDisabled ? EagerAttendee : LazyAttendee

export declare const Attendee: (new (init: ModelInit<Attendee, AttendeeMetaData>) => Attendee) & {
  copyOf(source: Attendee, mutator: (draft: MutableModel<Attendee, AttendeeMetaData>) => MutableModel<Attendee, AttendeeMetaData> | void): Attendee;
}

type EagerUser = {
  readonly id: string;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly jjbelt?: number | null;
  readonly llbelt?: number | null;
  readonly image?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly enroll?: string | null;
  readonly renew?: string | null;
  readonly insta?: string | null;
  readonly hideEmail?: boolean | null;
  readonly hidePhone?: boolean | null;
  readonly freeze?: boolean | null;
  readonly freezeStart?: string | null;
  readonly freezeEnd?: string | null;
  readonly goal?: number | null;
  readonly progress?: number | null;
  readonly classesTotal?: number | null;
  readonly userMonths?: (UserMonth | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly jjbelt?: number | null;
  readonly llbelt?: number | null;
  readonly image?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly enroll?: string | null;
  readonly renew?: string | null;
  readonly insta?: string | null;
  readonly hideEmail?: boolean | null;
  readonly hidePhone?: boolean | null;
  readonly freeze?: boolean | null;
  readonly freezeStart?: string | null;
  readonly freezeEnd?: string | null;
  readonly goal?: number | null;
  readonly progress?: number | null;
  readonly classesTotal?: number | null;
  readonly userMonths: AsyncCollection<UserMonth>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerUserMonth = {
  readonly id: string;
  readonly user?: User | null;
  readonly year?: number | null;
  readonly month?: number | null;
  readonly jj?: number | null;
  readonly ll?: number | null;
  readonly kb?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserMonth = {
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly year?: number | null;
  readonly month?: number | null;
  readonly jj?: number | null;
  readonly ll?: number | null;
  readonly kb?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserMonth = LazyLoading extends LazyLoadingDisabled ? EagerUserMonth : LazyUserMonth

export declare const UserMonth: (new (init: ModelInit<UserMonth, UserMonthMetaData>) => UserMonth) & {
  copyOf(source: UserMonth, mutator: (draft: MutableModel<UserMonth, UserMonthMetaData>) => MutableModel<UserMonth, UserMonthMetaData> | void): UserMonth;
}