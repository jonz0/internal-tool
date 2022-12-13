"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listUsers = exports.listDays = exports.listClasses = exports.listAttendees = exports.getUser = exports.getDay = exports.getClass = exports.getAttendee = void 0;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const getDay = /* GraphQL */`
  query GetDay($id: ID!) {
    getDay(id: $id) {
      id
      day
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
      }
      date
      open
      createdAt
      updatedAt
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
        day
        classes {
          nextToken
        }
        date
        open
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
exports.listDays = listDays;
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
        day
        classes {
          nextToken
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
          day
          date
          open
          createdAt
          updatedAt
        }
        attendees {
          nextToken
        }
        message
        instructor
        createdAt
        updatedAt
        dayClassesId
      }
      nextToken
    }
  }
`;
exports.listClasses = listClasses;
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
          day
          date
          open
          createdAt
          updatedAt
        }
        attendees {
          nextToken
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
    }
  }
`;
exports.listAttendees = listAttendees;
const getUser = /* GraphQL */`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      firstName
      lastName
      jjBelt
      llBelt
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
      bjj2022jul
      ll2022jul
      bjj2022aug
      ll2022aug
      bjj2022sep
      ll2022sep
      bjj2022oct
      ll2022oct
      goal
      progress
      createdAt
      updatedAt
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
        jjBelt
        llBelt
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
        bjj2022jul
        ll2022jul
        bjj2022aug
        ll2022aug
        bjj2022sep
        ll2022sep
        bjj2022oct
        ll2022oct
        goal
        progress
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
exports.listUsers = listUsers;