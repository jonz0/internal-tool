import { useEffect, useRef, useState, useContext } from "react";
import { API, graphqlOperation } from "aws-amplify";
import DaySet from "./DaySet";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Admin.module.css";
import RemoveUser from "./RemoveUser";
import { useSelector, useDispatch } from "react-redux";

export default function ManageAttendees() {
  const detailsState = useSelector((state) => state.details.value);
  const removeStaging = useSelector((state) => state.removeStaging.value);
  const belts = ["⬜", "🟨", "🟧", "🟦", "🟪", "🟫", "⬛"];
  const classType = detailsState.type;
  // const awards = ["🥋", "🤼‍♂️", "🐯", "🥊"];
  // const ranks = ["🥉", "🥈", "🥇"];

  function getBelt(attendee) {
    if (classType == "jj") {
      console.log(attendee.jjbelt);
      return belts[attendee.jjbelt];
    } else if (classType == "ll") {
      return belts[attendee.llbelt];
    }
  }

  function removeStagedUsers() {
    removeStaging.forEach(async (id) => {
      const userToDelete = await API.graphql({
        query: mutations.deleteAttendee,
        variables: {
          input: {
            id: id,
          },
        },
      });
    });
  }
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
      <div className={styles.detailsHeaders}>
        <p className={styles.attendeesHeader}>Attendees</p>
        <Button colorScheme="red" size="sm" style={{ marginLeft: "50px" }}>
          Confirm Removals
        </Button>
      </div>
      <div className={styles.attendees}>
        {detailsState.attendees.map((attendee) => (
          <RemoveUser key={uuidv4()} attendee={attendee} />
        ))}
      </div>
    </div>
  );
}
