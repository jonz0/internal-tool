"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.updateUser =
  exports.updateDay =
  exports.updateClass =
  exports.updateAttendee =
  exports.deleteUser =
  exports.deleteDay =
  exports.deleteClass =
  exports.deleteAttendee =
  exports.createUser =
  exports.createDay =
  exports.createClass =
  exports.createAttendee =
    void 0;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
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
exports.createDay = createDay;
const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
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
exports.updateDay = updateDay;
const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
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
exports.deleteDay = deleteDay;
const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
exports.createClass = createClass;
const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
exports.updateClass = updateClass;
const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
exports.deleteClass = deleteClass;
const createAttendee = /* GraphQL */ `
  mutation CreateAttendee(
    $input: CreateAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    createAttendee(input: $input, condition: $condition) {
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
exports.createAttendee = createAttendee;
const updateAttendee = /* GraphQL */ `
  mutation UpdateAttendee(
    $input: UpdateAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    updateAttendee(input: $input, condition: $condition) {
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
exports.updateAttendee = updateAttendee;
const deleteAttendee = /* GraphQL */ `
  mutation DeleteAttendee(
    $input: DeleteAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    deleteAttendee(input: $input, condition: $condition) {
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
exports.deleteAttendee = deleteAttendee;
const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
exports.createUser = createUser;
const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
exports.updateUser = updateUser;
const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
exports.deleteUser = deleteUser;
