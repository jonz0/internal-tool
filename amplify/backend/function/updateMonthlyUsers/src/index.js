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
const { createUserMonth } = require("/opt/graphql/mutations");
const { listUsers } = require("/opt/graphql/queries");

const date_today = new Date();
const month_today = date_today.getMonth() + 1;
const year_today = date_today.getFullYear();
const userMonthPrefix = month_today + "-" + year_today + "-";

exports.handler = async (event) => {
  const getUsers = await request(
    {
      query: listUsers,
      variables: {
        filter: { active: { eq: true } },
      },
    },
    appsyncUrl,
    apiKey
  );

  getUsers.data.listUsers.items.forEach(async (user) => {
    try {
      console.log("creating userMonth for:", user.username);
      const makeUserMonth = await request(
        {
          query: createUserMonth,
          variables: {
            input: {
              month: month_today,
              year: year_today,
              userUserMonthsId: user.username,
              id: userMonthPrefix + user.username,
              jj: 0,
              ll: 0,
              kb: 0,
            },
          },
        },
        appsyncUrl,
        apiKey
      );
    } catch (err) {
      console.log(err);
    }
  });
};
