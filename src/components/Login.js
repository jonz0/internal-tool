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
import { PasswordField } from "./PasswordField";
// When using loose Javascript files:
// Modules, e.g. Webpack:
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

// ES Modules, e.g. transpiling with Babel
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";
import styles from "../../styles/Signup.module.css";
import Image from "next/image";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  var attributeList = [];

  function onSubmit(event) {
    event.preventDefault();

    UserPool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
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
            />
            <div className={styles.submitButtons}>
              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                style={{ marginRight: "8px" }}
              >
                Submit
              </Button>
              <Button mt={4} colorScheme="red" style={{ marginLeft: "8px" }}>
                Forgot Password
              </Button>
            </div>
          </FormControl>
        </form>
        {alert && (
          <Alert status="error" color="black">
            <AlertIcon />
            Incorrect user and password information.
          </Alert>
        )}
      </div>
    </div>
  );
}
