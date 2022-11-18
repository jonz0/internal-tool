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
    <div>
      {/* <p>Class: {details.name}</p>
      <p>Instructor: {details.instructor}</p>
      <p>Type: {details.type}</p>
      <p>
        Availability: {details.openSpots} out of {details.maxSpots}
      </p>
      <br />
      <p>Attendees:</p>
      {details.attendees.map((name) => (
        <p key={uuidv4()}>{name}</p>
      ))} */}

      <p>
        <b>Class:</b> {details.name}
      </p>
      <p>
        <b>Instructor:</b> {details.instructor}
      </p>
      <p>
        <b>Type:</b> {details.type}
      </p>
      <p>
        <b>Availability:</b> {details.openSpots} out of {details.maxSpots}
      </p>
      <br />
      <p>
        <b>Attendees:</b>
      </p>

      {details.attendees.map((attendee) => (
        <div className={styles.detailsContainer}>
          <RemoveUser key={uuidv4()} attendee={attendee} />
        </div>
      ))}

      <Button
        className={styles.removeButton}
        colorScheme="blue"
        size="sm"
        onClick={removeStagedUsers}
      >
        Remove
      </Button>
    </div>
  );
}
