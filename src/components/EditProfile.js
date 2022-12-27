import { useState, useEffect } from "react";
import { Button, FormControl, Input, Alert, AlertIcon } from "@chakra-ui/react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import styles from "../../styles/Profile.module.css";

export default function UserData() {
  const [hour, setHours] = useState({
    jj: null,
    ll: null,
    kb: null,
  });

  const [belts, setBelts] = useState({
    jj: null,
    ll: null,
  });

  const [attributes, setAttributes] = useState({
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    freezeStart: null,
    freezeEnd: null,
    enroll: null,
    renew: null,
    active: null,
  });

  useEffect(() => {}, []);

  return (
    <div>
      <FormControl>
        <Input
          id="username"
          type="text"
          // value={username}
          // onChange={(event) => {
          //   setUsername(event.target.value);
          // }}
          className={styles.input}
          color="grey"
          placeholder="Username"
          _placeholder={{ color: "inherit" }}
          autoComplete="off"
          size="sm"
        />
        <div className={styles.namesContainer}>
          <Input
            id="firstname"
            type="text"
            // value={first}
            // onChange={(event) => {
            //   setFirst(event.target.value);
            // }}
            className={styles.input}
            color="grey"
            placeholder="First Name"
            _placeholder={{ color: "inherit" }}
            autoComplete="off"
            size="sm"
          />
          <Input
            id="lastname"
            type="text"
            // value={last}
            // onChange={(event) => {
            //   setLast(event.target.value);
            // }}
            className={styles.input}
            color="grey"
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
            // value={email}
            // onChange={(event) => {
            //   setEmail(event.target.value);
            // }}
            className={styles.input}
            color="grey"
            placeholder="Email"
            _placeholder={{ color: "inherit" }}
            autoComplete="off"
            size="sm"
          />
          <Input
            id="phone"
            type="tel"
            // value={phone}
            // onChange={(event) => {
            //   setPhone(event.target.value);
            // }}
            className={styles.input}
            color="grey"
            placeholder="Phone"
            _placeholder={{ color: "inherit" }}
            autoComplete="off"
            size="sm"
          />
        </div>
        <Input
          id="password"
          type="password"
          // value={password}
          // onChange={(event) => {
          //   setPassword(event.target.value);
          // }}
          className={styles.input}
          color="grey"
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
    </div>
  );
}
