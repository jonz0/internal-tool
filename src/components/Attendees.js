import { useEffect, useRef, useState, useContext } from "react";
import styles from "../../styles/Admin.module.css";
import { API, graphqlOperation } from "aws-amplify";
import DaySet from "../components/DaySet";
import Menu from "../components/Menu";
import * as queries from "../graphql/queries";
import ManageUsers from "../components/ManageUsers";
import ManageAttendees from "../components/ManageAttendees";
import ManageClasses from "../components/ManageClasses";
import { useSelector, useDispatch } from "react-redux";
import { setManage } from "../features/class/adminSlice";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import RemoveUser from "../components/RemoveUser";
import { v4 as uuidv4 } from "uuid";
export default function Attendees() {
  const detailsState = useSelector((state) => state.details.value);
  const removeStaging = useSelector((state) => state.removeStaging.value);
  const belts = ["⬜", "🟨", "🟧", "🟦", "🟪", "🟫", "⬛"];
  const classType = detailsState.type;

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
    <div className={styles.attendeesContainer}>
      <div className={styles.detailsHeaders}>
        <p className={styles.attendeesHeader}>Attendees</p>
        <Button colorScheme="red" size="sm" style={{ marginLeft: "50px" }}>
          Confirm Removals
        </Button>
      </div>
      <div className={styles.contain}>
        <div className={styles.attendees}>
          {detailsState.attendees.map((attendee) => (
            <RemoveUser key={uuidv4()} attendee={attendee} />
          ))}
        </div>
      </div>
    </div>
  );
}
