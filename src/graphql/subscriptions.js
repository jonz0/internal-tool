/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($filter: ModelSubscriptionDayFilterInput) {
    onCreateDay(filter: $filter) {
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
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($filter: ModelSubscriptionDayFilterInput) {
    onUpdateDay(filter: $filter) {
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
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($filter: ModelSubscriptionDayFilterInput) {
    onDeleteDay(filter: $filter) {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
    onCreateClass(filter: $filter) {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
    onUpdateClass(filter: $filter) {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
    onDeleteClass(filter: $filter) {
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
export const onCreateAttendee = /* GraphQL */ `
  subscription OnCreateAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onCreateAttendee(filter: $filter) {
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
export const onUpdateAttendee = /* GraphQL */ `
  subscription OnUpdateAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onUpdateAttendee(filter: $filter) {
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
export const onDeleteAttendee = /* GraphQL */ `
  subscription OnDeleteAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onDeleteAttendee(filter: $filter) {
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
