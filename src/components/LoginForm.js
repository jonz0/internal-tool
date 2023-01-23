import { Alert, AlertIcon, Button, FormControl, Input } from "@chakra-ui/react";
import * as AWS from "aws-sdk/global";
import { useState } from "react";
import styles from "../../styles/Signup.module.css";
import UserPool from "../UserPool";
import ForgotForm from "./ForgotForm";
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [forgot, setForgot] = useState(false);

  function resetAlerts() {
    setAlert(false);
    setAlertText("");
    setSuccess(false);
  }

  let authenticationData = {
    Username: username,
    Password: password,
  };

  let authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    authenticationData
  );

  let userData = {
    Username: username,
    Pool: UserPool,
  };

  let cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  function onSubmit() {
    resetAlerts();

    if (username.length < 1) {
      setAlertText("Please enter a username.");
      setAlert(true);
      return;
    } else if (password.length < 1) {
      setAlertText("Please enter a password.");
      setAlert(true);
      return;
    }

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
          IdentityPoolId: "us-west-1:cd6ae6a6-edde-450e-90b2-c54f0be36980", // your identity pool id here
          Logins: {
            // Change the key below according to the specific region your user pool is in.
            "cognito-idp.us-west-1.amazonaws.com/us-west-1_490MiqgjE": result
              .getIdToken()
              .getJwtToken(),
          },
        });

        AWS.config.credentials.refresh(async (error) => {
          if (error) {
            setAlertText("Error logging in. Please try again after some time.");
            setAlert(true);
          } else {
            console.log("Successfully logged!");

            window.location.reload();
          }
        });
      },
      onFailure: function (err) {
        if (err.message.includes("Incorrect username or password")) {
          setAlertText("Incorrect username or password.");
        } else if (err.message.includes("Attempt limit exceeded")) {
          setAlertText("Attempt limit exceeded. Please try after some time.");
        } else if (err.message.includes("User is not confirmed")) {
          setAlertText(
            "User is awaiting email verification or admin approval."
          );
        } else {
          console.log(err.message);
          setAlertText("Error logging in. Please try again after some time.");
        }
        setAlert(true);
      },
    });
  }

  async function debug() {
    console.log("debugging...");
    const cognito = new AWS.CognitoIdentityServiceProvider();

    async function isEmailRegistered(email) {
      //Check if user email is registered

      var params = {
        UserPoolId: "us-west-1_490MiqgjE" /* required */,
        AttributesToGet: ["email"],
        Filter: 'email = "' + email + '"',
      };

      return cognito.listUsers(params).promise();
    }

    await isEmailRegistered("ijonluu@gmail.com")
      .then((data) => {
        if (data.Users.length === 0) {
          //User does not exist
        } else {
          //User does exist
        }
      })
      .catch((err) => {
        console.log("error: " + JSON.stringify(err));
      });
  }

  function forgotPw() {
    resetAlerts();
    setForgot(true);
  }

  return (
    <div>
      <div className={styles.formContainer}>
        {forgot && <ForgotForm setForgot={setForgot} setSuccess={setSuccess} />}
        {!forgot && (
          <div>
            <p className={styles.formHeader}>Welcome!</p>
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
              <Button
                mt={4}
                colorScheme="blue"
                onClick={onSubmit}
                style={{ marginRight: "8px" }}
              >
                Log in
              </Button>
              <Button
                mt={4}
                colorScheme="red"
                style={{ marginLeft: "8px" }}
                onClick={forgotPw}
              >
                Forgot Password
              </Button>
              {/* <Button
                mt={4}
                colorScheme="teal"
                style={{ marginRight: "8px" }}
                onClick={debug}
              >
                Debug
              </Button> */}
            </FormControl>
            {alert && (
              <Alert
                status="error"
                color="black"
                fontSize="sm"
                className={styles.alert}
              >
                <AlertIcon />
                {alertText}
              </Alert>
            )}
            {success && (
              <Alert
                status="success"
                color="black"
                fontSize="sm"
                className={styles.alert}
              >
                <AlertIcon />
                Your password has been successfully changed!
              </Alert>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
