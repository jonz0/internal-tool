/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_CALENDARSIGNUP_GRAPHQLAPIIDOUTPUT
	API_CALENDARSIGNUP_GRAPHQLAPIENDPOINTOUTPUT
	API_CALENDARSIGNUP_GRAPHQLAPIKEYOUTPUT
	API_AMPLIFYLAYERGUIDE_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYLAYERGUIDE_GRAPHQLAPIKEYOUTPUT
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const appsyncUrl = process.env.API_AMPLIFYLAYERGUIDE_GRAPHQLAPIENDPOINTOUTPUT;
const apiKey = process.env.API_AMPLIFYLAYERGUIDE_GRAPHQLAPIKEYOUTPUT;

const { request } = require("/opt/appsyncRequest");
const { deleteAttendee } = require("/opt/graphql/mutations");
const { listAttendees } = require("/opt/graphql/queries");

const yday =
  weekday[new Date(new Date().setDate(new Date().getDate() - 1)).getDay()];
const weekday = ["-sun", "-mon", "-tue", "-wed", "-thu", "-fri", "-sat"];

exports.handler = async (event) => {
  try {
    const getAttendees = await request(
      {
        query: listAttendees,
        variables: {
          filter: { classAttendeesId: { contains: yday } },
        },
      },
      appsyncUrl,
      apiKey
    );

    getAttendees.data.listAttendees.items.forEach(async (item) => {
      console.log("deleting attendee:", item.id);

      const reviseUserMonth = await request(
        {
          query: deleteAttendee,
          variables: {
            input: {
              id: item.id,
            },
          },
        },
        appsyncUrl,
        apiKey
      );
    });
  } catch (err) {
    console.log(JSON.stringify(err));
  }
};
