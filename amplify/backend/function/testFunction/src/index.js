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

const { createUserMonth } = require("../../../../../src/graphql/mutations");
const { request } = require("/opt/appSyncRequest");
const { createUserMonth, updateUserMonth } = require("/opt/graphql/mutations");
const { listAttendees } = require("/opt/graphql/queries");

exports.handler = async (event) => {
  let date_today = new Date();
  let date_yday = new Date(date_today.setDate(date_today.getDate() - 1));
  let day_yday = ("0" + date_yday.getDate()).slice(-2);
  let month_yday = ("0" + (date_yday.getMonth() + 1)).slice(-2);
  let year_yday = date_yday.getFullYear();
  let date_yday_AWS = year_yday + "-" + month_yday + "-" + day_yday;
  let userMonthPrefix = month_yday + "-" + year_yday + "-";

  try {
    var getAttendees = await request(
      {
        query: listAttendees,
        variables: {
          filter: { classAttendeesId: { eq: "0700-mon" } },
        },
      },
      appsyncUrl,
      apiKey
    );

    getAttendees.data.listAttendees.items.forEach(async (item) => {
      try {
        if (item.class.type == "jj") {
          var getNumberClasses = await request(
            {
              query: getUserMonth,
              variables: {
                input: {
                  id: "99dc5d1b-fa80-4e3a-856d-b2231c305774"
                },
              },
            },
            appsyncUrl,
            apiKey
          );
          var reviseUserMonth = await request(
            {
              query: updateUserMonth,
              variables: {
                input: {
                  id: userMonthPrefix + item.username,
                  jj: ,
                },
              },
            },
            appsyncUrl,
            apiKey
          );
        } else if (item.class.type == "ll") {
          
        } else if (item.class.type == "kb") {
          
        }
      } catch (error) {
        if (item.class.type == "jj") {
          var makeUserMonth = await request(
            {
              query: createUserMonth,
              variables: {
                input: {
                  month: month_yday,
                  year: year_yday,
                  userUserMonthsId: item.username,
                  id: userMonthPrefix + item.username,
                  jj: 1,
                },
              },
            },
            appsyncUrl,
            apiKey
          );
        } else if (item.class.type == "ll") {
          var makeUserMonth = await request(
            {
              query: createUserMonth,
              variables: {
                input: {
                  month: month_yday,
                  year: year_yday,
                  userUserMonthsId: item.username,
                  id: userMonthPrefix + item.username,
                  ll: 1,
                },
              },
            },
            appsyncUrl,
            apiKey
          );
        } else if (item.class.type == "kb") {
          var makeUserMonth = await request(
            {
              query: createUserMonth,
              variables: {
                input: {
                  month: month_yday,
                  year: year_yday,
                  userUserMonthsId: item.username,
                  id: userMonthPrefix + item.username,
                  kb: 1,
                },
              },
            },
            appsyncUrl,
            apiKey
          );
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};
