import { useState, useEffect, useRef, useContext } from "react";
import { DetailsContext } from "./Class";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Admin.module.css";
import RemoveUser from "./RemoveUser";
import { useSelector, useDispatch } from "react-redux";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";

export default function DetailsAdmin() {
  const details = useSelector((state) => state.details.value);
  const removeStaging = useSelector((state) => state.removeStaging.value);
  const belts = ["⬜", "🟨", "🟧", "🟦", "🟪", "🟫", "⬛"];
  const awards = ["🥋", "🤼‍♂️", "🐯", "🥊"];
  const ranks = ["🥉", "🥈", "🥇"];

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
    <div className={styles.detailsContainer}>
      <div className={styles.detailsLeft}>
        <p>
          <b>Class:</b> {details.name}
        </p>
        <p>
          <b>Type:</b> {details.type}
        </p>
        <p>
          <b>Instructor:</b> {details.instructor}
        </p>
        <p>
          <b>Availability:</b> {details.openSpots} out of {details.maxSpots}
        </p>
        <p>
          <b>Message:</b>
        </p>
      </div>

      <div className={styles.detailsRight}>
        {details.attendees.map((attendee) => (
          <div className={styles.detailsContainer}>
            <RemoveUser key={uuidv4()} attendee={attendee} />
          </div>
        ))}
      </div>
    </div>
  );
}
