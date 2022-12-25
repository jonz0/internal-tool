"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncUsers = exports.syncUserMonths = exports.syncDays = exports.syncClasses = exports.syncAttendees = exports.listUsers = exports.listUserMonths = exports.listDays = exports.listClasses = exports.listAttendees = exports.getUserMonth = exports.getUser = exports.getDay = exports.getClass = exports.getAttendee = void 0;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const getDay = /* GraphQL */`
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
          _version
          _deleted
          _lastChangedAt
          dayClassesId
        }
        nextToken
        startedAt
      }
      date
      open
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.getDay = getDay;
const listDays = /* GraphQL */`
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.listDays = listDays;
const syncDays = /* GraphQL */`
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncDays = syncDays;
const getClass = /* GraphQL */`
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          classAttendeesId
        }
        nextToken
        startedAt
      }
      message
      instructor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      dayClassesId
    }
  }
`;
exports.getClass = getClass;
const listClasses = /* GraphQL */`
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
          _version
          _deleted
          _lastChangedAt
        }
        attendees {
          nextToken
          startedAt
        }
        message
        instructor
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        dayClassesId
      }
      nextToken
      startedAt
    }
  }
`;
exports.listClasses = listClasses;
const syncClasses = /* GraphQL */`
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
          _version
          _deleted
          _lastChangedAt
        }
        attendees {
          nextToken
          startedAt
        }
        message
        instructor
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        dayClassesId
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncClasses = syncClasses;
const getAttendee = /* GraphQL */`
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
          _version
          _deleted
          _lastChangedAt
        }
        attendees {
          nextToken
          startedAt
        }
        message
        instructor
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        dayClassesId
      }
      username
      firstName
      lastName
      jjbelt
      llbelt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      classAttendeesId
    }
  }
`;
exports.getAttendee = getAttendee;
const listAttendees = /* GraphQL */`
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
          _version
          _deleted
          _lastChangedAt
          dayClassesId
        }
        username
        firstName
        lastName
        jjbelt
        llbelt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        classAttendeesId
      }
      nextToken
      startedAt
    }
  }
`;
exports.listAttendees = listAttendees;
const syncAttendees = /* GraphQL */`
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
          _version
          _deleted
          _lastChangedAt
          dayClassesId
        }
        username
        firstName
        lastName
        jjbelt
        llbelt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        classAttendeesId
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncAttendees = syncAttendees;
const getUser = /* GraphQL */`
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
          _version
          _deleted
          _lastChangedAt
          userUserMonthsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.getUser = getUser;
const listUsers = /* GraphQL */`
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.listUsers = listUsers;
const syncUsers = /* GraphQL */`
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncUsers = syncUsers;
const getUserMonth = /* GraphQL */`
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
        _version
        _deleted
        _lastChangedAt
      }
      year
      month
      jj
      ll
      kb
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userUserMonthsId
    }
  }
`;
exports.getUserMonth = getUserMonth;
const listUserMonths = /* GraphQL */`
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
          _version
          _deleted
          _lastChangedAt
        }
        year
        month
        jj
        ll
        kb
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userUserMonthsId
      }
      nextToken
      startedAt
    }
  }
`;
exports.listUserMonths = listUserMonths;
const syncUserMonths = /* GraphQL */`
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
          _version
          _deleted
          _lastChangedAt
        }
        year
        month
        jj
        ll
        kb
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userUserMonthsId
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncUserMonths = syncUserMonths;