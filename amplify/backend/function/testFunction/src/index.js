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
const { updateUserMonth, createUserMonth } = require("/opt/graphql/mutations");
const {
  listAttendees,
  getUserMonth,
  listUserMonths,
} = require("/opt/graphql/queries");

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
      var getNumberClasses = await request(
        {
          query: getUserMonth,
          variables: {
            id: userMonthPrefix + item.username,
          },
        },
        appsyncUrl,
        apiKey
      );

      if (getNumberClasses.data.getUserMonth !== null) {
        if (item.class.type == "jj") {
          var reviseUserMonth = await request(
            {
              query: updateUserMonth,
              variables: {
                input: {
                  id: userMonthPrefix + item.username,
                  jj: getNumberClasses.data.getUserMonth.jj + 1,
                },
              },
            },
            appsyncUrl,
            apiKey
          );
        } else if (item.class.type == "ll") {
          var getNumberClasses = await request(
            {
              query: getUserMonth,
              variables: {
                id: userMonthPrefix + item.username,
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
                  ll: getNumberClasses.data.getUserMonth.ll + 1,
                },
              },
            },
            appsyncUrl,
            apiKey
          );
        } else if (item.class.type == "kb") {
          var getNumberClasses = await request(
            {
              query: getUserMonth,
              variables: {
                id: userMonthPrefix + item.username,
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
                  kb: getNumberClasses.data.getUserMonth.kb + 1,
                },
              },
            },
            appsyncUrl,
            apiKey
          );
        }
      } else {
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
                  ll: 0,
                  kb: 0,
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
                  jj: 0,
                  ll: 1,
                  kb: 0,
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
                  jj: 0,
                  ll: 0,
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
