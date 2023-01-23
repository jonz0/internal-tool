import { Alert, AlertIcon, Button, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import styles from "../../styles/Signup.module.css";
import UserPool from "../UserPool";
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
export default function ForgotForm({ setForgot, setSuccess }) {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [newpass, setNewpass] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [entering, setEntering] = useState(true);
  const [verifying, setVerifying] = useState(false);

  let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
    Username: username,
    Pool: UserPool,
  });

  function resetAlerts() {
    setAlert(false);
    setAlertText("");
  }

  function sendCode() {
    resetAlerts();
    if (username.length < 1) {
      setAlertText("Please enter an account username.");
      setAlert(true);
      return;
    }

    cognitoUser.forgotPassword({
      onSuccess: function (result) {
        setEntering(false);
        setVerifying(true);
      },
      onFailure: function (err) {
        if (err.message.includes("Attempt limit exceeded")) {
          setAlertText("Attempt limit exceeded. Please try after some time.");
        } else {
          setAlertText(
            "Error sending a verification code. Please try after some time."
          );
        }
        setAlert(true);
      },
    });
  }

  function reset() {
    resetAlerts();

    if (code.length < 1) {
      setAlertText("Please enter a verification code.");
      setAlert(true);
      return;
    } else if (newpass.length < 1) {
      setAlertText("Please enter a new password.");
      setAlert(true);
      return;
    }

    cognitoUser.confirmPassword(code, newpass, {
      onFailure(err) {
        if (err.message.includes("Attempt limit exceeded")) {
          setAlertText("Attempt limit exceeded. Please try after some time.");
        } else if (err.message.includes("Invalid verification code")) {
          setAlertText("Invalid verification code provided.");
        } else if (err.message.includes("'password' failed to satisfy")) {
          setAlertText(
            "Passwords must contain at least 8 characters with one letter and number."
          );
        } else {
          console.log(err.message);
          setAlertText(
            "Error resetting your password. Please try again or call us!"
          );
        }
        setAlert(true);
        return;
      },
      onSuccess() {
        resetAlerts();
        setEntering(false);
        setVerifying(false);
        setForgot(false);
        setSuccess(true);
      },
    });
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
              className={styles.submitButtons}
              onClick={() => {
                resetAlerts();
                setVerifying(false);
                setForgot.setForgot(false);
              }}
              style={{ marginRight: "8px" }}
            >
              Back
            </Button>
            <Button
              mt={4}
              colorScheme="blue"
              type="submit"
              className={styles.submitButtons}
              onClick={sendCode}
              style={{ marginLeft: "8px" }}
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
            <Input
              id="verification"
              type="password"
              value={newpass}
              onChange={(event) => {
                setNewpass(event.target.value);
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
              className={styles.submitButtons}
              onClick={() => {
                resetAlerts();
                setVerifying(false);
                setEntering(true);
              }}
              style={{ marginRight: "8px" }}
            >
              Back
            </Button>
            <Button
              mt={4}
              colorScheme="blue"
              type="submit"
              className={styles.submitButtons}
              onClick={reset}
              style={{ marginLeft: "8px" }}
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
    </div>
  );
}
