import styles from "../../styles/Home.module.css";
import DaySet from "../components/DaySet";
import Details from "../components/Details";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Menu from "../components/Menu";
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";

export default function Home() {
  return (
    <div className="page-container">
      <Menu selected="Classes" />
      <div className={styles.pageRight}>
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
          <Details />
        </div>
      </div>
    </div>
  );
}
