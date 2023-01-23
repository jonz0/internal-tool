import "@aws-amplify/ui-react/styles.css";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import ConfirmButton from "../components/ConfirmButton";
import DaySet from "../components/DaySet";
import Details from "../components/Details";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="page-container">
      <Menu selected="Classes" />
      <div className={styles.pageRight}>
        <div className={styles.calendarContainer}>
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList className={styles.tabsList}>
              <div className={styles.tabsBar}>
                <div className={styles.tabs}>
                  <Tab>Adults</Tab>
                  <Tab>Kids</Tab>
                </div>
                <ConfirmButton />
              </div>
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
