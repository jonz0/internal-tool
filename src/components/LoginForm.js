import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import UserPool from "../UserPool";
// When using loose Javascript files:
// Modules, e.g. Webpack:
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

// ES Modules, e.g. transpiling with Babel
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";
import styles from "../../styles/Signup.module.css";
import Image from "next/image";
import * as AWS from "aws-sdk/global";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  function onSubmit(event) {
    event.preventDefault();

    var authenticationData = {
      Username: username,
      Password: password,
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData
    );

    var userData = {
      Username: username,
      Pool: UserPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();

        //POTENTIAL: Region needs to be set if not already set previously elsewhere.
        //POTENTIAL: Region needs to be set if not already set previously elsewhere.
        AWS.config.region = "us-west-1";

        AWS.config.update({
          region: "us-west-1", //Here add you region
        });

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "us-west-1:38d464a7-1d45-4f28-b400-621e4d4e5631", // your identity pool id here
          Logins: {
            // Change the key below according to the specific region your user pool is in.
            "cognito-idp.us-west-1.amazonaws.com/us-west-1_R2escFqfm": result
              .getIdToken()
              .getJwtToken(),
          },
        });

        //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
        AWS.config.credentials.refresh((error) => {
          if (error) {
            console.error(error);
          } else {
            // Instantiate aws sdk service objects now that the credentials have been updated.
            // example: var s3 = new AWS.S3();
            console.log("Successfully logged!");
          }
        });
      },

      onFailure: function (err) {
        console.log(err.message || JSON.stringify(err));
      },
    });
  }

  return (
    <div>
      <div className={styles.formContainer}>
        <p className={styles.formHeader}>Welcome!</p>
        <form onSubmit={onSubmit}>
          <FormControl>
            <Input
              id="username"
              type="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              className={styles.input}
              color="white"
              placeholder="Username"
              _placeholder={{ color: "inherit" }}
              autoComplete="off"
              size="sm"
            />
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className={styles.input}
              color="white"
              placeholder="Password"
              _placeholder={{ color: "inherit" }}
              autoComplete="off"
              size="sm"
            />
            <div className={styles.submitButtons}>
              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                style={{ marginRight: "8px" }}
              >
                Log in
              </Button>
              <Button mt={4} colorScheme="red" style={{ marginLeft: "8px" }}>
                Forgot Password
              </Button>
            </div>
          </FormControl>
          {alert && (
            <Alert status="error" color="black">
              <AlertIcon />
              Incorrect user and password information.
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
}
