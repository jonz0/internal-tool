/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["testSecret"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_AMPLIFYLAYERGUIDE_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYLAYERGUIDE_GRAPHQLAPIKEYOUTPUT
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const appsyncUrl = process.env.API_AMPLIFYLAYERGUIDE_GRAPHQLAPIENDPOINTOUTPUT;
const apiKey = process.env.API_AMPLIFYLAYERGUIDE_GRAPHQLAPIKEYOUTPUT;

const { request } = require("/opt/appSyncRequest");
const { updateDay } = require("/opt/graphql/mutations");
const { getUser } = require("/opt/graphql/queries");

/**
 * DailySweep should accomplish two goals:
 *     Update the dates of the preceeding and week-after days, and
 *     Update the profiles of each attendee in the previous day
 */

exports.handler = async (event) => {
  const weekday = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  // Get the current date and find the preceeding and week-after days
  let date_today = new Date();
  let date_yday = new Date(date_today.setDate(date_today.getDate() - 1));
  let date_nextw = new Date(date_today.setDate(date_today.getDate() + 6));

  console.log("wingmusauce: " + date_nextw.getFullYear());

  let day_yday = ("0" + date_yday.getDate()).slice(-2);
  let month_yday = ("0" + (date_yday.getMonth() + 1)).slice(-2);
  let year_yday = date_yday.getFullYear();
  let date_yday_AWS = year_yday + "-" + month_yday + "-" + day_yday;

  let day_nextw = ("0" + date_nextw.getDate()).slice(-2);
  let month_nextw = ("0" + (date_nextw.getMonth() + 1)).slice(-2);
  let year_nextw = date_nextw.getFullYear();
  let date_nextw_AWS = year_nextw + "-" + month_nextw + "-" + day_nextw;

  try {
    // Update the dates of the preceeding and week-after days

    var changeDays = await request(
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

    // Update the profiles of each attendee in the previous day
  } catch (error) {
    console.log(error);
  }
};
