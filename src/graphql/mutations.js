/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
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
export const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
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
export const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
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
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
