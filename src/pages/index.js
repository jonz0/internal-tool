import "@aws-amplify/ui-react/styles.css";
import { useState } from "react";
import { API } from "aws-amplify";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import ConfirmButton from "../components/ConfirmButton";
import DaySet from "../components/DaySet";
import Details from "../components/Details";
import Menu from "../components/Menu";
import Day from "../components/Day";
import * as queries from "../graphql/queries";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
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
                  {Array.from(Array(numDays).keys()).map((day) => {
                    return (
                      <Day
                        key={uuidv4()}
                        increment={day}
                        exclude={"kids"}
                        admin={false}
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
                        admin={false}
                      />
                    );
                  })}
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
