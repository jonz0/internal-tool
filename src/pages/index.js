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
} from "@chakra-ui/react";
import Menu from "../components/Menu";
import { Amplify } from "aws-amplify";
import config from "../aws-exports";
import { AmplifyProvider, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default withAuthenticator(function Home() {
  return (
    <AmplifyProvider>
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

            <Details />
          </div>
        </div>
      </div>
    </AmplifyProvider>
  );
});
