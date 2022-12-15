/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAttendee = /* GraphQL */ `
  query GetAttendee($id: ID!) {
    getAttendee(id: $id) {
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
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const getUserMonth = /* GraphQL */ `
  query GetUserMonth($id: ID!) {
    getUserMonth(id: $id) {
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
export const listAttendees = /* GraphQL */ `
  query ListAttendees(
    $filter: ModelAttendeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        class {
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
  }
`;
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        classes {
          nextToken
        }
        createdAt
        date
        id
        open
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUserMonths = /* GraphQL */ `
  query ListUserMonths(
    $filter: ModelUserMonthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMonths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          username
        }
        userUserMonthsId
        year
      }
      nextToken
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
