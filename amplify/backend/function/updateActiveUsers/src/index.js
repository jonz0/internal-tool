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
const { updateUser } = require("/opt/graphql/mutations");
const { listUsers } = require("/opt/graphql/queries");

const date_today = new Date();
const AWSdate_today = date_today.toISOString().split("T")[0];

exports.handler = async (event) => {
  try {
    const getUsers = await request(
      {
        query: listUsers,
        variables: {
          filter: {
            renew: { eq: AWSdate_today },
            active: { eq: true },
          },
        },
      },
      appsyncUrl,
      apiKey
    );

    getUsers.data.listUsers.items.forEach(async (item) => {
      console.log("updating user", item.id);

      const deactivate = await request(
        {
          query: updateUser,
          variables: {
            input: {
              id: item.id,
              active: false,
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
