import { useEffect, useRef, useState, useContext } from "react";
import styles from "../../styles/Home.module.css";
import { API, graphqlOperation } from "aws-amplify";
import DaySet from "../components/DaySet";
import DetailsAdmin from "../components/DetailsAdmin";
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
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import ManageUsers from "../components/ManageUsers";

function debug() {
  console.log(retrieveInactives());
}

async function retrieveInactives() {
  const getInactives = await API.graphql({
    query: queries.listUsers,
    variables: {
      filter: { enroll: { attributeExists: false } },
    },
  });

  return getInactives.data.listUsers.items.resolve;
}

async function buildDefaultSchema() {
  const newTodo = await API.graphql(
    graphqlOperation(mutations.createDay, { input: { id: "flunday" } })
  ); // equivalent to above example
}

export default function admin() {
  return (
    <div className="page-container">
      <Menu />
      <div className={styles.pageRight}>
        <ManageUsers />
        {/* <div className={styles.calendarContainer}>
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
        </div> */}
      </div>
    </div>
  );
}
