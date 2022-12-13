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

const { request } = require("/opt/appsyncRequest");
const { createDay } = require("/opt/graphql/mutations");
const { listDays } = require("/opt/graphql/queries");

exports.handler = async (event) => {
  try {
    // create a TODO with AWS_IAM auth
    // var result = await request(
    //   {
    //     query: createDay,
    //     variables: {
    //       input: {
    //         day: 'flunday',
    //         id: 'flunday',
    //       },
    //     },
    //   },
    //   appsyncUrl
    // )
    // console.log('iam results:', result)

    // Now, retrieve all TODOs using API_KEY auth
    var result = await request(
      {
        query: listDays,
        operationName: "listDays",
      },
      appsyncUrl,
      apiKey
    );
    console.log("api key results", result);
  } catch (error) {
    console.log(error);
  }
};

// exports.handler = async (event) => {
//   console.log(`EVENT: ${JSON.stringify(event)}`);
//   return {
//     statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  },
//     body: JSON.stringify("Hello from Lambda!"),
//   };
// };
