import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import styles from "../../styles/Admin.module.css";
import Attendees from "./Attendees";
import { useState } from "react";
import Day from "./Day";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import { v4 as uuidv4 } from "uuid";

export default function ManageAttendees() {
  const [numDays, setNumDays] = useState(0);

  async function getDays() {
    const days = await API.graphql({
      query: queries.listDays,
    });
    return days.data.listDays.items.length;
  }

  getDays().then((ret) => {
    setNumDays(ret);
  });

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
              {Array.from(Array(numDays).keys()).map((day) => {
                return (
                  <Day
                    key={uuidv4()}
                    increment={day}
                    exclude={"kids"}
                    admin={true}
                  />
                );
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.signupContainer}>
              {Array.from(Array(numDays).keys()).map((day) => {
                return (
                  <Day
                    key={uuidv4()}
                    increment={day}
                    exclude={"adults"}
                    admin={true}
                  />
                );
              })}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Attendees />
    </div>
  );
}
