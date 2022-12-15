// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Day, Class, Attendee, User, UserMonth } = initSchema(schema);

export {
  Day,
  Class,
  Attendee,
  User,
  UserMonth
};