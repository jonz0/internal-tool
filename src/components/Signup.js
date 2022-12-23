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
import { PasswordField } from "./PasswordField";
// When using loose Javascript files:
// Modules, e.g. Webpack:
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

// ES Modules, e.g. transpiling with Babel
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";
import styles from "../../styles/Signup.module.css";
import Image from "next/image";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

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
      } else {
        setAlert(false);
      }
      console.log(data);
    });
  }

  return (
    <div>
      <div className={styles.formContainer}>
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
            />
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
              />
            </div>
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
            />
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              className={styles.submitButtons}
            >
              Submit
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
            Welcome! Your new account has been created and is awaiting approval.
          </Alert>
        )}
      </div>
    </div>
  );
}
