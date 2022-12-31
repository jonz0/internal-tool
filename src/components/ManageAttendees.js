import { useEffect, useRef, useState, useContext } from "react";
import { API, graphqlOperation } from "aws-amplify";
import DaySet from "./DaySet";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Admin.module.css";
import RemoveUser from "./RemoveUser";
import { useSelector, useDispatch } from "react-redux";
import Attendees from "./Attendees";

export default function ManageAttendees() {
  return (
    <div className={styles.calendarContainer}>
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList className={styles.tabs}>
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
      <Attendees />
    </div>
  );
}
