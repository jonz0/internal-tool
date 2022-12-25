import { useState } from "react";
import { Button, FormControl, Input, Alert, AlertIcon } from "@chakra-ui/react";
import UserPool from "../UserPool";
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
import styles from "../../styles/Signup.module.css";
import VerifyForm from "./VerifyForm";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [alertText, setAlertText] = useState("");

  function resetFields() {
    setEmail("");
    setPhone("");
    setPassword("");
    setUsername("");
    setFirst("");
    setLast("");
  }

  function resetAlerts() {
    setAlert(false);
    setAlertText("");
  }

  var attributeList = [];

  function onSubmit(event) {
    event.preventDefault();
    resetAlerts();

    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "email",
      Value: email,
    });

    var attributeFirst = new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "custom:firstname",
      Value: first,
    });

    var attributeLast = new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "custom:lastname",
      Value: last,
    });

    attributeList.push(attributeEmail, attributeFirst, attributeLast);

    UserPool.signUp(username, password, attributeList, null, (err, data) => {
      if (
        username.length < 1 ||
        password.length < 1 ||
        email.length < 1 ||
        first.length < 1 ||
        last.length < 1 ||
        phone.length < 1
      ) {
        setAlert(true);
        setAlertText("Please fill out all fields to sign up");
        setVerifying(false);
        return;
      }

      if (err) {
        if (err.message.includes("'password' failed to satisfy")) {
          setAlert(true);
          setAlertText(
            "Passwords must contain at least 8 characters with one letter and number."
          );
        } else {
          console.log(err.message);
        }
      }

      resetAlerts();
      resetFields();
      setVerifying(true);
    });
  }

  return (
    <div>
      <div className={styles.formContainer}>
        {verifying && (
          <VerifyForm
            user={username}
            setVerifying={setVerifying}
            setSuccess={setSuccess}
          />
        )}
        {!verifying && (
          <div>
            <p className={styles.formHeader}>Start Training Here:</p>
            <form onSubmit={onSubmit}>
              <FormControl>
                <Input
                  id="username"
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
                <div className={styles.namesContainer}>
                  <Input
                    id="firstname"
                    type="text"
                    value={first}
                    onChange={(event) => {
                      setFirst(event.target.value);
                    }}
                    className={styles.input}
                    color="white"
                    placeholder="First Name"
                    _placeholder={{ color: "inherit" }}
                    autoComplete="off"
                    size="sm"
                  />
                  <Input
                    id="lastname"
                    type="text"
                    value={last}
                    onChange={(event) => {
                      setLast(event.target.value);
                    }}
                    className={styles.input}
                    color="white"
                    placeholder="Last Name"
                    _placeholder={{ color: "inherit" }}
                    autoComplete="off"
                    size="sm"
                  />
                </div>
                <div className={styles.namesContainer}>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    className={styles.input}
                    color="white"
                    placeholder="Email"
                    _placeholder={{ color: "inherit" }}
                    autoComplete="off"
                    size="sm"
                  />
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                    className={styles.input}
                    color="white"
                    placeholder="Phone"
                    _placeholder={{ color: "inherit" }}
                    autoComplete="off"
                    size="sm"
                  />
                </div>
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
                  type="submit"
                  className={styles.submitButtons}
                >
                  Sign up
                </Button>
              </FormControl>
            </form>
            {alert && (
              <Alert
                status="error"
                color="black"
                className={styles.alert}
                fontSize="sm"
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
          </div>
        )}
      </div>
    </div>
  );
}
