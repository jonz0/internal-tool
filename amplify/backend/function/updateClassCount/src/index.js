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
const { updateUserMonth } = require("/opt/graphql/mutations");
const {
  listAttendees,
  getUserMonth,
  listClasses,
} = require("/opt/graphql/queries");

const date_today = new Date();
const date_yday = new Date(date_today.setDate(date_today.getDate() - 1));
const month_yday = ("0" + (date_yday.getMonth() + 1)).slice(-2);
const year_yday = date_yday.getFullYear();
const userMonthPrefix = month_yday + "-" + year_yday + "-";
const weekday = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const yday =
  weekday[new Date(new Date().setDate(new Date().getDate() - 1)).getDay()];

exports.handler = async (event) => {
  let getClasses = await request(
    {
      query: listClasses,
      variables: {
        filter: { dayClassesId: { eq: yday } },
      },
    },
    appsyncUrl,
    apiKey
  );

  getClasses.data.listClasses.items.forEach(async (classObj) => {
    try {
      const getAttendees = await request(
        {
          query: listAttendees,
          variables: {
            filter: { classAttendeesId: { eq: classObj.id } },
          },
        },
        appsyncUrl,
        apiKey
      );

      getAttendees.data.listAttendees.items.forEach(async (item) => {
        const getNumberClasses = await request(
          {
            query: getUserMonth,
            variables: {
              id: userMonthPrefix + item.username,
            },
          },
          appsyncUrl,
          apiKey
        );

        switch (item.class.type) {
          case "jj":
            const reviseUserMonth = await request(
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
            console.log("successful update on user:", item.username);
          case "ll":
            const reviseUserMonth = await request(
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
            console.log("successful update on user:", item.username);
          case "kb":
            const reviseUserMonth = await request(
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
            console.log("successful update on user:", item.username);
        }
      });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  });
};
