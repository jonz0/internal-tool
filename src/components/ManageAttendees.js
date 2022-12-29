import { useEffect, useRef, useState, useContext } from "react";
import styles from "../../styles/Home.module.css";
import { API, graphqlOperation } from "aws-amplify";
import DaySet from "./DaySet";
import DetailsAdmin from "./DetailsAdmin";
import {
  Button,
  ButtonGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Menu from "./Menu";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";

export default function ManageAttendees() {
  return (
    <div>
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
  );
}
