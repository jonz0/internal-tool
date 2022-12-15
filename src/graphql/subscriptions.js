/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAttendee = /* GraphQL */ `
  subscription OnCreateAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onCreateAttendee(filter: $filter) {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
    onCreateClass(filter: $filter) {
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
export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($filter: ModelSubscriptionDayFilterInput) {
    onCreateDay(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onCreateUserMonth = /* GraphQL */ `
  subscription OnCreateUserMonth(
    $filter: ModelSubscriptionUserMonthFilterInput
  ) {
    onCreateUserMonth(filter: $filter) {
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
export const onDeleteAttendee = /* GraphQL */ `
  subscription OnDeleteAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onDeleteAttendee(filter: $filter) {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
    onDeleteClass(filter: $filter) {
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
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($filter: ModelSubscriptionDayFilterInput) {
    onDeleteDay(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onDeleteUserMonth = /* GraphQL */ `
  subscription OnDeleteUserMonth(
    $filter: ModelSubscriptionUserMonthFilterInput
  ) {
    onDeleteUserMonth(filter: $filter) {
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
export const onUpdateAttendee = /* GraphQL */ `
  subscription OnUpdateAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onUpdateAttendee(filter: $filter) {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
    onUpdateClass(filter: $filter) {
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
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($filter: ModelSubscriptionDayFilterInput) {
    onUpdateDay(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onUpdateUserMonth = /* GraphQL */ `
  subscription OnUpdateUserMonth(
    $filter: ModelSubscriptionUserMonthFilterInput
  ) {
    onUpdateUserMonth(filter: $filter) {
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
