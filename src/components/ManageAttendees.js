import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import styles from "../../styles/Admin.module.css";
import Attendees from "./Attendees";
import DaySet from "./DaySet";

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
