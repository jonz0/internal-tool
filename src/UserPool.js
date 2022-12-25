import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-west-1_490MiqgjE",
  ClientId: "3oukjnppphm30rj15iekbndbrl",
};

export default new CognitoUserPool(poolData);
