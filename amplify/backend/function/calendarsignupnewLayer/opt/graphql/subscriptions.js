"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.onUpdateUser =
  exports.onUpdateDay =
  exports.onUpdateClass =
  exports.onUpdateAttendee =
  exports.onDeleteUser =
  exports.onDeleteDay =
  exports.onDeleteClass =
  exports.onDeleteAttendee =
  exports.onCreateUser =
  exports.onCreateDay =
  exports.onCreateClass =
  exports.onCreateAttendee =
    void 0;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($filter: ModelSubscriptionDayFilterInput) {
    onCreateDay(filter: $filter) {
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
exports.onCreateDay = onCreateDay;
const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($filter: ModelSubscriptionDayFilterInput) {
    onUpdateDay(filter: $filter) {
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
exports.onUpdateDay = onUpdateDay;
const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($filter: ModelSubscriptionDayFilterInput) {
    onDeleteDay(filter: $filter) {
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
exports.onDeleteDay = onDeleteDay;
const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
    onCreateClass(filter: $filter) {
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
exports.onCreateClass = onCreateClass;
const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
    onUpdateClass(filter: $filter) {
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
exports.onUpdateClass = onUpdateClass;
const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
    onDeleteClass(filter: $filter) {
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
exports.onDeleteClass = onDeleteClass;
const onCreateAttendee = /* GraphQL */ `
  subscription OnCreateAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onCreateAttendee(filter: $filter) {
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
exports.onCreateAttendee = onCreateAttendee;
const onUpdateAttendee = /* GraphQL */ `
  subscription OnUpdateAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onUpdateAttendee(filter: $filter) {
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
exports.onUpdateAttendee = onUpdateAttendee;
const onDeleteAttendee = /* GraphQL */ `
  subscription OnDeleteAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onDeleteAttendee(filter: $filter) {
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
exports.onDeleteAttendee = onDeleteAttendee;
const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
      goal
      progress
      createdAt
      updatedAt
    }
  }
`;
exports.onCreateUser = onCreateUser;
const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
exports.onUpdateUser = onUpdateUser;
const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
exports.onDeleteUser = onDeleteUser;
