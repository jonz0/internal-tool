/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
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
export const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
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
export const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
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
export const createClass = /* GraphQL */ `
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
export const updateClass = /* GraphQL */ `
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
export const deleteClass = /* GraphQL */ `
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
export const createAttendee = /* GraphQL */ `
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
export const updateAttendee = /* GraphQL */ `
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
export const deleteAttendee = /* GraphQL */ `
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
export const createUser = /* GraphQL */ `
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserMonth = /* GraphQL */ `
  mutation CreateUserMonth(
    $input: CreateUserMonthInput!
    $condition: ModelUserMonthConditionInput
  ) {
    createUserMonth(input: $input, condition: $condition) {
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
export const updateUserMonth = /* GraphQL */ `
  mutation UpdateUserMonth(
    $input: UpdateUserMonthInput!
    $condition: ModelUserMonthConditionInput
  ) {
    updateUserMonth(input: $input, condition: $condition) {
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
export const deleteUserMonth = /* GraphQL */ `
  mutation DeleteUserMonth(
    $input: DeleteUserMonthInput!
    $condition: ModelUserMonthConditionInput
  ) {
    deleteUserMonth(input: $input, condition: $condition) {
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
