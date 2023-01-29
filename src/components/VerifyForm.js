import { Alert, AlertIcon, Button, FormControl, Input } from "@chakra-ui/react";
import { API } from "aws-amplify";
import { useState } from "react";
import styles from "../../styles/Signup.module.css";
import * as mutations from "../graphql/mutations";
import UserPool from "../UserPool";
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

export default function VerifyForm({ user, setVerifying, setSuccess }) {
  const [code, setCode] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [resent, setResent] = useState(false);

  function resetAlerts() {
    setAlert(false);
    setAlertText("");
  }

  var userData = {
    Username: user.username,
    Pool: UserPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  function onSubmit() {
    event.preventDefault();
    resetAlerts();

    cognitoUser.confirmRegistration(code, true, function (err, result) {
      if (code.length < 1) {
        setAlertText("Please enter a verification code.");
        setAlert(true);
        return;
      }

      if (err) {
        if (err.message.includes("Attempt limit exceeded")) {
          setAlertText("Attempt limit exceeded. Please try after some time.");
        }
        setAlert(true);
        return;
      }
    });

    setSuccess(true);
    setVerifying(false);
    createUser();
  }

  function resend() {
    resetAlerts();
    setResent(false);
    cognitoUser.resendConfirmationCode(function (err, result) {
      if (err) {
        if (err.message.includes("Attempt limit exceeded")) {
          setAlertText("Attempt limit exceeded. Please try after some time.");
          setAlert(true);
        } else {
          setAlertText("Error resending code. Please try again or call us!");
          setAlert(true);
        }
        return;
      }

      if (result !== null) {
        setResent(true);
      }
    });
  }

  async function createUser() {
    const newUser = await API.graphql({
      query: mutations.createUser,
      variables: {
        input: {
          id: user.username,
          username: user.username,
          email: user.email,
          phone: user.phone,
          firstName: user.first,
          lastName: user.last,
          active: false,
        },
      },
    });
  }

  return (
    <div>
      <p className={styles.formHeader}>Verify your account:</p>
      <form onSubmit={onSubmit}>
        <FormControl>
          <Input
            id="verification"
            type="text"
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
            }}
            className={styles.input}
            color="white"
            placeholder="Verification code"
            _placeholder={{ color: "inherit" }}
            autoComplete="off"
            size="sm"
          />
          <Button
            mt={4}
            colorScheme="blue"
            type="submit"
            className={styles.submitButtons}
            style={{ marginRight: "8px" }}
          >
            Confirm
          </Button>
          <Button
            mt={4}
            colorScheme="red"
            style={{ marginLeft: "8px" }}
            onClick={resend}
          >
            Resend Code
          </Button>
        </FormControl>
      </form>
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
      {resent && (
        <Alert
          status="info"
          color="black"
          fontSize="sm"
          className={styles.alert}
        >
          <AlertIcon />A new verification code has been sent to your email.
        </Alert>
      )}
    </div>
  );
}
