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
} from "@chakra-ui/react";
import UserPool from "../UserPool";
// When using loose Javascript files:
// Modules, e.g. Webpack:
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

// ES Modules, e.g. transpiling with Babel
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var attributeList = [];

  function onSubmit(event) {
    event.preventDefault();

    var dataEmail = {
      Name: "email",
      Value: email,
    };

    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
      dataEmail
    );
    attributeList.push(attributeEmail);

    UserPool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  }

  return (
    <div>
      <form className="authBox" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
