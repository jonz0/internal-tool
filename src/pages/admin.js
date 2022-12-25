import React, { useEffect, useRef, useState, useContext } from "react";

import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Day from "../components/Day";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import DaySet from "../components/DaySet";
import DetailsAdmin from "../components/DetailsAdmin";
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
} from "@chakra-ui/react";
import Menu from "../components/Menu";

async function buildDefaultSchema() {
  const newTodo = await API.graphql(
    graphqlOperation(mutations.createDay, { input: { id: "flunday" } })
  ); // equivalent to above example
}

// const userDetails = {
//   id: username,
//   username: username,
//   email: userEmail,
//   jjBelt: 0,
//   llBelt: 0,
// };

// const newUser = await API.graphql({
//   query: mutations.createUser,
//   variables: { input: userDetails },
// });
export default function admin() {
  return (
    <div className="page-container">
      <Menu />
      <div className={styles.pageRight}>
        <div className={styles.calendarContainer}>
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList className="tab-list">
              <Tab>Adults</Tab>
              <Tab>Kids</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className={styles.signupContainer}>
                  <DaySet exclude="kids" />
                </div>
              </TabPanel>
              <TabPanel>
                <div className={styles.signupContainer}>
                  <DaySet exclude="adults" />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <DetailsAdmin />
        </div>
      </div>
    </div>
  );
}
