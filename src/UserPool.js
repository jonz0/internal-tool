import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-west-1_R2escFqfm",
  ClientId: "16csftrtair2fu3di2vpr0f9dn",
};

export default new CognitoUserPool(poolData);
