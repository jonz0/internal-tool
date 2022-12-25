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
import { CodeDeploy } from "aws-sdk";

export default function VerifyForm(user) {
  const [code, setCode] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [success, setSuccess] = useState(false);
  const [resent, setResent] = useState(false);

  var userData = {
    Username: user.user,
    Pool: UserPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  function onSubmit(event) {
    event.preventDefault();
    setAlert(false);
    setResent(false);
    console.log(user.user);
    console.log(code);

    cognitoUser.confirmRegistration(code, true, function (err, result) {
      if (code.length < 1) {
        setAlertText("Please enter a verification code.");
        setAlert(true);
        return;
      }

      if (err) {
        if (err.message.startsWith("Attempt limit exceeded")) {
          setAlertText("Attempt limit exceeded. Please try after some time.");
          setAlert(true);
        } else if (err.message.startsWith("Invalid verification code")) {
          setAlertText("Invalid verification code provided.");
          setAlert(true);
        } else {
          setAlertText(
            "Error verifying your account. Please try again or call us!"
          );
          setAlert(true);
        }
      }

      console.log("call result: " + result);
    });
  }

  function resend() {
    setAlert(false);
    setResent(false);
    cognitoUser.resendConfirmationCode(function (err, result) {
      if (err) {
        if (err.message.startsWith("Attempt limit exceeded")) {
          setAlertText("Attempt limit exceeded. Please try after some time.");
          setAlert(true);
        } else {
          setAlertText("Error resending code. Please try again or call us!");
          setAlert(true);
        }
      }

      if (result !== null) {
        setResent(true);
      }
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
            colorScheme="teal"
            type="submit"
            className={styles.submitButtons}
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
      {success && (
        <Alert
          status="success"
          color="black"
          fontSize="sm"
          className={styles.alert}
        >
          <AlertIcon />
          Your new account has been verified and is awaiting approval.
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
