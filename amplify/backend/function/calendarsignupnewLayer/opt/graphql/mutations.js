"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserMonth = exports.updateUser = exports.updateDay = exports.updateClass = exports.updateAttendee = exports.deleteUserMonth = exports.deleteUser = exports.deleteDay = exports.deleteClass = exports.deleteAttendee = exports.createUserMonth = exports.createUser = exports.createDay = exports.createClass = exports.createAttendee = void 0;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const createAttendee = /* GraphQL */`
  mutation CreateAttendee(
    $condition: ModelAttendeeConditionInput
    $input: CreateAttendeeInput!
  ) {
    createAttendee(condition: $condition, input: $input) {
      class {
        age
        attendees {
          nextToken
        }
        classOpen
        createdAt
        day {
          createdAt
          date
          id
          open
          updatedAt
        }
        dayClassesId
        end
        id
        instructor
        maxSpots
        message
        name
        openSpots
        start
        type
        updatedAt
      }
      classAttendeesId
      createdAt
      firstName
      id
      jjbelt
      lastName
      llbelt
      updatedAt
      username
    }
  }
`;
exports.createAttendee = createAttendee;
const createClass = /* GraphQL */`
  mutation CreateClass(
    $condition: ModelClassConditionInput
    $input: CreateClassInput!
  ) {
    createClass(condition: $condition, input: $input) {
      age
      attendees {
        items {
          classAttendeesId
          createdAt
          firstName
          id
          jjbelt
          lastName
          llbelt
          updatedAt
          username
        }
        nextToken
      }
      classOpen
      createdAt
      day {
        classes {
          nextToken
        }
        createdAt
        date
        id
        open
        updatedAt
      }
      dayClassesId
      end
      id
      instructor
      maxSpots
      message
      name
      openSpots
      start
      type
      updatedAt
    }
  }
`;
exports.createClass = createClass;
const createDay = /* GraphQL */`
  mutation CreateDay(
    $condition: ModelDayConditionInput
    $input: CreateDayInput!
  ) {
    createDay(condition: $condition, input: $input) {
      classes {
        items {
          age
          classOpen
          createdAt
          dayClassesId
          end
          id
          instructor
          maxSpots
          message
          name
          openSpots
          start
          type
          updatedAt
        }
        nextToken
      }
      createdAt
      date
      id
      open
      updatedAt
    }
  }
`;
exports.createDay = createDay;
const createUser = /* GraphQL */`
  mutation CreateUser(
    $condition: ModelUserConditionInput
    $input: CreateUserInput!
  ) {
    createUser(condition: $condition, input: $input) {
      classesTotal
      createdAt
      email
      enroll
      firstName
      freeze
      freezeEnd
      freezeStart
      goal
      hideEmail
      hidePhone
      id
      image
      insta
      jjbelt
      lastName
      llbelt
      phone
      progress
      renew
      updatedAt
      userMonths {
        items {
          createdAt
          id
          jj
          kb
          ll
          month
          updatedAt
          userUserMonthsId
          year
        }
        nextToken
      }
      username
    }
  }
`;
exports.createUser = createUser;
const createUserMonth = /* GraphQL */`
  mutation CreateUserMonth(
    $condition: ModelUserMonthConditionInput
    $input: CreateUserMonthInput!
  ) {
    createUserMonth(condition: $condition, input: $input) {
      createdAt
      id
      jj
      kb
      ll
      month
      updatedAt
      user {
        classesTotal
        createdAt
        email
        enroll
        firstName
        freeze
        freezeEnd
        freezeStart
        goal
        hideEmail
        hidePhone
        id
        image
        insta
        jjbelt
        lastName
        llbelt
        phone
        progress
        renew
        updatedAt
        userMonths {
          nextToken
        }
        username
      }
      userUserMonthsId
      year
    }
  }
`;
exports.createUserMonth = createUserMonth;
const deleteAttendee = /* GraphQL */`
  mutation DeleteAttendee(
    $condition: ModelAttendeeConditionInput
    $input: DeleteAttendeeInput!
  ) {
    deleteAttendee(condition: $condition, input: $input) {
      class {
        age
        attendees {
          nextToken
        }
        classOpen
        createdAt
        day {
          createdAt
          date
          id
          open
          updatedAt
        }
        dayClassesId
        end
        id
        instructor
        maxSpots
        message
        name
        openSpots
        start
        type
        updatedAt
      }
      classAttendeesId
      createdAt
      firstName
      id
      jjbelt
      lastName
      llbelt
      updatedAt
      username
    }
  }
`;
exports.deleteAttendee = deleteAttendee;
const deleteClass = /* GraphQL */`
  mutation DeleteClass(
    $condition: ModelClassConditionInput
    $input: DeleteClassInput!
  ) {
    deleteClass(condition: $condition, input: $input) {
      age
      attendees {
        items {
          classAttendeesId
          createdAt
          firstName
          id
          jjbelt
          lastName
          llbelt
          updatedAt
          username
        }
        nextToken
      }
      classOpen
      createdAt
      day {
        classes {
          nextToken
        }
        createdAt
        date
        id
        open
        updatedAt
      }
      dayClassesId
      end
      id
      instructor
      maxSpots
      message
      name
      openSpots
      start
      type
      updatedAt
    }
  }
`;
exports.deleteClass = deleteClass;
const deleteDay = /* GraphQL */`
  mutation DeleteDay(
    $condition: ModelDayConditionInput
    $input: DeleteDayInput!
  ) {
    deleteDay(condition: $condition, input: $input) {
      classes {
        items {
          age
          classOpen
          createdAt
          dayClassesId
          end
          id
          instructor
          maxSpots
          message
          name
          openSpots
          start
          type
          updatedAt
        }
        nextToken
      }
      createdAt
      date
      id
      open
      updatedAt
    }
  }
`;
exports.deleteDay = deleteDay;
const deleteUser = /* GraphQL */`
  mutation DeleteUser(
    $condition: ModelUserConditionInput
    $input: DeleteUserInput!
  ) {
    deleteUser(condition: $condition, input: $input) {
      classesTotal
      createdAt
      email
      enroll
      firstName
      freeze
      freezeEnd
      freezeStart
      goal
      hideEmail
      hidePhone
      id
      image
      insta
      jjbelt
      lastName
      llbelt
      phone
      progress
      renew
      updatedAt
      userMonths {
        items {
          createdAt
          id
          jj
          kb
          ll
          month
          updatedAt
          userUserMonthsId
          year
        }
        nextToken
      }
      username
    }
  }
`;
exports.deleteUser = deleteUser;
const deleteUserMonth = /* GraphQL */`
  mutation DeleteUserMonth(
    $condition: ModelUserMonthConditionInput
    $input: DeleteUserMonthInput!
  ) {
    deleteUserMonth(condition: $condition, input: $input) {
      createdAt
      id
      jj
      kb
      ll
      month
      updatedAt
      user {
        classesTotal
        createdAt
        email
        enroll
        firstName
        freeze
        freezeEnd
        freezeStart
        goal
        hideEmail
        hidePhone
        id
        image
        insta
        jjbelt
        lastName
        llbelt
        phone
        progress
        renew
        updatedAt
        userMonths {
          nextToken
        }
        username
      }
      userUserMonthsId
      year
    }
  }
`;
exports.deleteUserMonth = deleteUserMonth;
const updateAttendee = /* GraphQL */`
  mutation UpdateAttendee(
    $condition: ModelAttendeeConditionInput
    $input: UpdateAttendeeInput!
  ) {
    updateAttendee(condition: $condition, input: $input) {
      class {
        age
        attendees {
          nextToken
        }
        classOpen
        createdAt
        day {
          createdAt
          date
          id
          open
          updatedAt
        }
        dayClassesId
        end
        id
        instructor
        maxSpots
        message
        name
        openSpots
        start
        type
        updatedAt
      }
      classAttendeesId
      createdAt
      firstName
      id
      jjbelt
      lastName
      llbelt
      updatedAt
      username
    }
  }
`;
exports.updateAttendee = updateAttendee;
const updateClass = /* GraphQL */`
  mutation UpdateClass(
    $condition: ModelClassConditionInput
    $input: UpdateClassInput!
  ) {
    updateClass(condition: $condition, input: $input) {
      age
      attendees {
        items {
          classAttendeesId
          createdAt
          firstName
          id
          jjbelt
          lastName
          llbelt
          updatedAt
          username
        }
        nextToken
      }
      classOpen
      createdAt
      day {
        classes {
          nextToken
        }
        createdAt
        date
        id
        open
        updatedAt
      }
      dayClassesId
      end
      id
      instructor
      maxSpots
      message
      name
      openSpots
      start
      type
      updatedAt
    }
  }
`;
exports.updateClass = updateClass;
const updateDay = /* GraphQL */`
  mutation UpdateDay(
    $condition: ModelDayConditionInput
    $input: UpdateDayInput!
  ) {
    updateDay(condition: $condition, input: $input) {
      classes {
        items {
          age
          classOpen
          createdAt
          dayClassesId
          end
          id
          instructor
          maxSpots
          message
          name
          openSpots
          start
          type
          updatedAt
        }
        nextToken
      }
      createdAt
      date
      id
      open
      updatedAt
    }
  }
`;
exports.updateDay = updateDay;
const updateUser = /* GraphQL */`
  mutation UpdateUser(
    $condition: ModelUserConditionInput
    $input: UpdateUserInput!
  ) {
    updateUser(condition: $condition, input: $input) {
      classesTotal
      createdAt
      email
      enroll
      firstName
      freeze
      freezeEnd
      freezeStart
      goal
      hideEmail
      hidePhone
      id
      image
      insta
      jjbelt
      lastName
      llbelt
      phone
      progress
      renew
      updatedAt
      userMonths {
        items {
          createdAt
          id
          jj
          kb
          ll
          month
          updatedAt
          userUserMonthsId
          year
        }
        nextToken
      }
      username
    }
  }
`;
exports.updateUser = updateUser;
const updateUserMonth = /* GraphQL */`
  mutation UpdateUserMonth(
    $condition: ModelUserMonthConditionInput
    $input: UpdateUserMonthInput!
  ) {
    updateUserMonth(condition: $condition, input: $input) {
      createdAt
      id
      jj
      kb
      ll
      month
      updatedAt
      user {
        classesTotal
        createdAt
        email
        enroll
        firstName
        freeze
        freezeEnd
        freezeStart
        goal
        hideEmail
        hidePhone
        id
        image
        insta
        jjbelt
        lastName
        llbelt
        phone
        progress
        renew
        updatedAt
        userMonths {
          nextToken
        }
        username
      }
      userUserMonthsId
      year
    }
  }
`;
exports.updateUserMonth = updateUserMonth;