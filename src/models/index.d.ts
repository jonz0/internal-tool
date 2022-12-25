import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerDay = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Day, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly classes?: (Class | null)[] | null;
  readonly date?: string | null;
  readonly open?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDay = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Day, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly classes: AsyncCollection<Class>;
  readonly date?: string | null;
  readonly open?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Day = LazyLoading extends LazyLoadingDisabled ? EagerDay : LazyDay

export declare const Day: (new (init: ModelInit<Day>) => Day) & {
  copyOf(source: Day, mutator: (draft: MutableModel<Day>) => MutableModel<Day> | void): Day;
}

type EagerClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly dayClassesId?: string | null;
}

type LazyClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly dayClassesId?: string | null;
}

export declare type Class = LazyLoading extends LazyLoadingDisabled ? EagerClass : LazyClass

export declare const Class: (new (init: ModelInit<Class>) => Class) & {
  copyOf(source: Class, mutator: (draft: MutableModel<Class>) => MutableModel<Class> | void): Class;
}

type EagerAttendee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attendee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly class?: Class | null;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly jjbelt?: number | null;
  readonly llbelt?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly classAttendeesId?: string | null;
}

type LazyAttendee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attendee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly class: AsyncItem<Class | undefined>;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly jjbelt?: number | null;
  readonly llbelt?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly classAttendeesId?: string | null;
}

export declare type Attendee = LazyLoading extends LazyLoadingDisabled ? EagerAttendee : LazyAttendee

export declare const Attendee: (new (init: ModelInit<Attendee>) => Attendee) & {
  copyOf(source: Attendee, mutator: (draft: MutableModel<Attendee>) => MutableModel<Attendee> | void): Attendee;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly active?: boolean | null;
  readonly userMonths?: (UserMonth | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly active?: boolean | null;
  readonly userMonths: AsyncCollection<UserMonth>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerUserMonth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMonth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly year?: number | null;
  readonly month?: number | null;
  readonly jj?: number | null;
  readonly ll?: number | null;
  readonly kb?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserMonthsId?: string | null;
}

type LazyUserMonth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMonth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly year?: number | null;
  readonly month?: number | null;
  readonly jj?: number | null;
  readonly ll?: number | null;
  readonly kb?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserMonthsId?: string | null;
}

export declare type UserMonth = LazyLoading extends LazyLoadingDisabled ? EagerUserMonth : LazyUserMonth

export declare const UserMonth: (new (init: ModelInit<UserMonth>) => UserMonth) & {
  copyOf(source: UserMonth, mutator: (draft: MutableModel<UserMonth>) => MutableModel<UserMonth> | void): UserMonth;
}