import styles from "../../styles/Home.module.css";
import DaySet from "../components/DaySet";
import Details from "../components/Details";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import Menu from "../components/Menu";
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { useSelector, useDispatch } from "react-redux";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

export default function Home() {
  const classStaging = useSelector((state) => state.selected.value);

  return (
    <div className="page-container">
      <Menu selected="Classes" />
      <div className={styles.pageRight}>
        <div className={styles.calendarContainer}>
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList className={styles.tabs}>
              <Tab>Adults</Tab>
              <Tab>Kids</Tab>
              <Button
                mt={4}
                colorScheme="red"
                // className={styles.submitButtons}
                size="sm"
                style={{
                  marginRight: "12px",
                  marginBottom: "20px",
                  marginTop: "8px",
                }}
                // onClick={() => setEditing(false)}
              >
                Cancel
              </Button>
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
