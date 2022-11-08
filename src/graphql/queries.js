/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
      id
      className
      classes {
        items {
          id
          name
          createdAt
          updatedAt
          dayClassesId
        }
        nextToken
      }
      createdAt
      updatedAt
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
        id
        className
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      name
      day {
        id
        className
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      attendees {
        items {
          id
          name
          createdAt
          updatedAt
          classAttendeesId
        }
        nextToken
      }
      createdAt
      updatedAt
      dayClassesId
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
        id
        name
        day {
          id
          className
          createdAt
          updatedAt
        }
        attendees {
          nextToken
        }
        createdAt
        updatedAt
        dayClassesId
      }
      nextToken
    }
  }
`;
export const getAttendee = /* GraphQL */ `
  query GetAttendee($id: ID!) {
    getAttendee(id: $id) {
      id
      class {
        id
        name
        day {
          id
          className
          createdAt
          updatedAt
        }
        attendees {
          nextToken
        }
        createdAt
        updatedAt
        dayClassesId
      }
      name
      createdAt
      updatedAt
      classAttendeesId
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
        id
        class {
          id
          name
          createdAt
          updatedAt
          dayClassesId
        }
        name
        createdAt
        updatedAt
        classAttendeesId
      }
      nextToken
    }
  }
`;
