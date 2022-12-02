import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Day from "../components/Day";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import DaySet from "../components/DaySet";
import { useState, useEffect, useRef, useContext } from "react";
import Details from "../components/Details";
import Class from "../components/Class";
import Image from "next/image";
import {
  Button,
  ButtonGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import Menu from "../components/Menu";
import { Amplify } from "aws-amplify";
import config from "../aws-exports";
import { AmplifyProvider, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Redirect, Route } from "react-router-dom";
import Router from "next/router";

export default withAuthenticator(function setup() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  return (
    <AmplifyProvider>
      <div className={styles.setupContainer}>
        <div className={styles.setupForm}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel>Last name</FormLabel>
            <Input />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel>Email address</FormLabel>
            <Input />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </div>
      </div>
    </AmplifyProvider>
  );
});
