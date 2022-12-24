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

  var attributeList = [];

  function onSubmit(event) {
    event.preventDefault();

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
      if (err) {
        console.log(err);
        setAlert(true);
        setVerifying(false);
      } else {
        setAlert(false);
        setVerifying(true);
      }
      console.log(data);
    });
  }

  return (
    <div>
      <div className={styles.formContainer}>
        {verifying && <VerifyForm user={username} />}
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
                  colorScheme="teal"
                  type="submit"
                  className={styles.submitButtons}
                >
                  Sign up
                </Button>
              </FormControl>
            </form>
            {alert && (
              <Alert status="error" color="black">
                <AlertIcon />
                Alert Text
              </Alert>
            )}
            {success && (
              <Alert status="success" color="black">
                <AlertIcon />
                Your new account has been created and is awaiting approval.
              </Alert>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
