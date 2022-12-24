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

export default function ForgotForm(user) {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [success, setSuccess] = useState(false);
  const [resent, setResent] = useState(false);
  const [entering, setEntering] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [resetting, setResetting] = useState(false);

  function resend() {
    setAlert(false);
  }

  function sendCode() {
    if (username.length < 1) {
      setAlert(true);
      setAlertText("Please enter a username to verify.");
    } else {
    }

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser({
      Username: username,
      Pool: UserPool,
    });

    cognitoUser.forgotPassword({
      onSuccess: function (result) {
        console.log("call result: " + result);
        setEntering(false);
        setVerifying(true);
      },
      onFailure: function (err) {
        console.log(err);
        return;
      },
      // inputVerificationCode() {
      //   // this is optional, and likely won't be implemented as in AWS's example (i.e, prompt to get info)
      //   var verificationCode = prompt("Please input verification code ", "");
      //   var newPassword = prompt("Enter new password ", "");
      //   cognitoUser.confirmPassword(verificationCode, newPassword, this);
      // },
    });
  }

  function verify() {
    setVerifying(false);
    setResetting(true);
  }

  return (
    <div>
      <p className={styles.formHeader}>Forgot Password</p>
      {entering && (
        <div>
          <FormControl>
            <Input
              id="verification"
              type="text"
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
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              className={styles.submitButtons}
              onClick={sendCode}
            >
              Send Verification Code
            </Button>
          </FormControl>
        </div>
      )}

      {verifying && (
        <div>
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
              onClick={verify}
            >
              Verify Account
            </Button>
          </FormControl>
        </div>
      )}
      {resetting && (
        <div>
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
              placeholder="New Password"
              _placeholder={{ color: "inherit" }}
              autoComplete="off"
              size="sm"
            />
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              className={styles.submitButtons}
              onClick={verify}
            >
              Reset Password
            </Button>
          </FormControl>
        </div>
      )}
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
