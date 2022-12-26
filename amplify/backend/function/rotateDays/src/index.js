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
const { updateDay } = require("/opt/graphql/mutations");

// Get the current date and find the preceeding and week-after days

const date_nextw = new Date(new Date().setDate(new Date().getDate() + 6));
const day_nextw = ("0" + date_nextw.getDate()).slice(-2);
const month_nextw = ("0" + (date_nextw.getMonth() + 1)).slice(-2);
const year_nextw = date_nextw.getFullYear();
const date_nextw_AWS = year_nextw + "-" + month_nextw + "-" + day_nextw;
const weekday = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

exports.handler = async (event) => {
  try {
    // Update the dates of the preceeding and week-after days
    console.log("updating day:", weekday[date_nextw.getDay()]);
    console.log("updating to day:", date_nextw_AWS);

    const changeDays = await request(
      {
        query: updateDay,
        variables: {
          input: {
            id: weekday[date_nextw.getDay()],
            date: date_nextw_AWS,
          },
        },
      },
      appsyncUrl,
      apiKey
    );
  } catch (error) {
    console.log(error);
  }
};
