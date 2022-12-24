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
  const [code, setCode] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    console.log(user.user);
    console.log(code);

    var userData = {
      Username: user.user,
      Pool: UserPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.confirmRegistration(code, true, function (err, result) {
      if (err) {
        console.log(err.message || JSON.stringify(err));
        return;
      }
      console.log("call result: " + result);
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
        </FormControl>
      </form>
    </div>
  );
}
