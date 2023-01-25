import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import styles from "../../styles/Admin.module.css";
import Attendees from "./Attendees";
import DaySet from "./DaySet";
import { useState } from "react";

export default function ManageAttendees() {
  const [toggle, setToggle] = useState(false);
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
              <DaySet exclude="kids" admin={true} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.signupContainer}>
              <DaySet exclude="adults" admin={true} />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Attendees setToggle={setToggle} />
    </div>
  );
}
