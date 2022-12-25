"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.syncUsers =
  exports.syncUserMonths =
  exports.syncDays =
  exports.syncClasses =
  exports.syncAttendees =
  exports.listUsers =
  exports.listUserMonths =
  exports.listDays =
  exports.listClasses =
  exports.listAttendees =
  exports.getUserMonth =
  exports.getUser =
  exports.getDay =
  exports.getClass =
  exports.getAttendee =
    void 0;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
      id
      classes {
        items {
          id
          name
          start
          end
          type
          age
          maxSpots
          openSpots
          classOpen
          message
          instructor
          createdAt
          updatedAt
          dayClassesId
        }
        nextToken
        startedAt
      }
      date
      open
      createdAt
      updatedAt
    }
  }
`;
exports.getDay = getDay;
const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        classes {
          nextToken
          startedAt
        }
        date
        open
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.listDays = listDays;
const syncDays = /* GraphQL */ `
  query SyncDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDays(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        classes {
          nextToken
          startedAt
        }
        date
        open
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncDays = syncDays;
const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      name
      start
      end
      type
      age
      maxSpots
      openSpots
      classOpen
      day {
        id
        classes {
          nextToken
          startedAt
        }
        date
        open
        createdAt
        updatedAt
      }
      attendees {
        items {
          id
          username
          firstName
          lastName
          jjbelt
          llbelt
          createdAt
          updatedAt
          classAttendeesId
        }
        nextToken
        startedAt
      }
      message
      instructor
      createdAt
      updatedAt
      dayClassesId
    }
  }
`;
exports.getClass = getClass;
const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        start
        end
        type
        age
        maxSpots
        openSpots
        classOpen
        day {
          id
          date
          open
          createdAt
          updatedAt
        }
        attendees {
          nextToken
          startedAt
        }
        message
        instructor
        createdAt
        updatedAt
        dayClassesId
      }
      nextToken
      startedAt
    }
  }
`;
exports.listClasses = listClasses;
const syncClasses = /* GraphQL */ `
  query SyncClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        start
        end
        type
        age
        maxSpots
        openSpots
        classOpen
        day {
          id
          date
          open
          createdAt
          updatedAt
        }
        attendees {
          nextToken
          startedAt
        }
        message
        instructor
        createdAt
        updatedAt
        dayClassesId
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncClasses = syncClasses;
const getAttendee = /* GraphQL */ `
  query GetAttendee($id: ID!) {
    getAttendee(id: $id) {
      id
      class {
        id
        name
        start
        end
        type
        age
        maxSpots
        openSpots
        classOpen
        day {
          id
          date
          open
          createdAt
          updatedAt
        }
        attendees {
          nextToken
          startedAt
        }
        message
        instructor
        createdAt
        updatedAt
        dayClassesId
      }
      username
      firstName
      lastName
      jjbelt
      llbelt
      createdAt
      updatedAt
      classAttendeesId
    }
  }
`;
exports.getAttendee = getAttendee;
const listAttendees = /* GraphQL */ `
  query ListAttendees(
    $filter: ModelAttendeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        class {
          id
          name
          start
          end
          type
          age
          maxSpots
          openSpots
          classOpen
          message
          instructor
          createdAt
          updatedAt
          dayClassesId
        }
        username
        firstName
        lastName
        jjbelt
        llbelt
        createdAt
        updatedAt
        classAttendeesId
      }
      nextToken
      startedAt
    }
  }
`;
exports.listAttendees = listAttendees;
const syncAttendees = /* GraphQL */ `
  query SyncAttendees(
    $filter: ModelAttendeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttendees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        class {
          id
          name
          start
          end
          type
          age
          maxSpots
          openSpots
          classOpen
          message
          instructor
          createdAt
          updatedAt
          dayClassesId
        }
        username
        firstName
        lastName
        jjbelt
        llbelt
        createdAt
        updatedAt
        classAttendeesId
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncAttendees = syncAttendees;
const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      firstName
      lastName
      jjbelt
      llbelt
      image
      email
      phone
      enroll
      renew
      insta
      hideEmail
      hidePhone
      freeze
      freezeStart
      freezeEnd
      goal
      progress
      classesTotal
      active
      userMonths {
        items {
          id
          year
          month
          jj
          ll
          kb
          createdAt
          updatedAt
          userUserMonthsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
    }
  }
`;
exports.getUser = getUser;
const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        firstName
        lastName
        jjbelt
        llbelt
        image
        email
        phone
        enroll
        renew
        insta
        hideEmail
        hidePhone
        freeze
        freezeStart
        freezeEnd
        goal
        progress
        classesTotal
        active
        userMonths {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.listUsers = listUsers;
const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        firstName
        lastName
        jjbelt
        llbelt
        image
        email
        phone
        enroll
        renew
        insta
        hideEmail
        hidePhone
        freeze
        freezeStart
        freezeEnd
        goal
        progress
        classesTotal
        active
        userMonths {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncUsers = syncUsers;
const getUserMonth = /* GraphQL */ `
  query GetUserMonth($id: ID!) {
    getUserMonth(id: $id) {
      id
      user {
        id
        username
        firstName
        lastName
        jjbelt
        llbelt
        image
        email
        phone
        enroll
        renew
        insta
        hideEmail
        hidePhone
        freeze
        freezeStart
        freezeEnd
        goal
        progress
        classesTotal
        active
        userMonths {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
      }
      year
      month
      jj
      ll
      kb
      createdAt
      updatedAt
      userUserMonthsId
    }
  }
`;
exports.getUserMonth = getUserMonth;
const listUserMonths = /* GraphQL */ `
  query ListUserMonths(
    $filter: ModelUserMonthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMonths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          username
          firstName
          lastName
          jjbelt
          llbelt
          image
          email
          phone
          enroll
          renew
          insta
          hideEmail
          hidePhone
          freeze
          freezeStart
          freezeEnd
          goal
          progress
          classesTotal
          active
          createdAt
          updatedAt
        }
        year
        month
        jj
        ll
        kb
        createdAt
        updatedAt
        userUserMonthsId
      }
      nextToken
      startedAt
    }
  }
`;
exports.listUserMonths = listUserMonths;
const syncUserMonths = /* GraphQL */ `
  query SyncUserMonths(
    $filter: ModelUserMonthFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserMonths(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user {
          id
          username
          firstName
          lastName
          jjbelt
          llbelt
          image
          email
          phone
          enroll
          renew
          insta
          hideEmail
          hidePhone
          freeze
          freezeStart
          freezeEnd
          goal
          progress
          classesTotal
          active
          createdAt
          updatedAt
        }
        year
        month
        jj
        ll
        kb
        createdAt
        updatedAt
        userUserMonthsId
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncUserMonths = syncUserMonths;
