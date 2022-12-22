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

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
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
