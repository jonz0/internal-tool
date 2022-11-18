import React, { useEffect, useRef, useState, useContext } from "react";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import { Textarea } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setDetails } from "../features/class/detailsSlice";

export default function Class({ c }) {
  if (c == null) {
    return (
      <div>
        <Button
          className={styles.signupButton}
          colorScheme="blue"
          width="150px"
          height="50px"
          variant="outline"
          fontSize="10pt"
          isDisabled={true}
        >
          No Classes
        </Button>
      </div>
    );
  }

  const dispatch = useDispatch();

  const details = useRef({
    id: c.id,
    name: c.name,
    start: c.start,
    end: c.end,
    type: c.type,
    maxSpots: c.maxSpots,
    openSpots: c.openSpots,
    classOpen: c.classOpen,
    attendees: [],
    message: c.message,
    instructor: c.instructor,
  });

  useEffect(() => {
    fetchDetails();
  }, []);

  async function fetchDetails() {
    let students = [];

    const classAttendees = await API.graphql({
      query: queries.listAttendees,
      variables: {
        filter: {
          classAttendeesId: {
            eq: c.id,
          },
        },
      },
    });

    classAttendees.data.listAttendees.items.forEach((attendee) =>
      students.push({
        name: toTitleCase(attendee.firstName + " " + attendee.lastName),
        jjbelt: attendee.jjbelt,
        llbelt: attendee.llbelt,
        id: attendee.id,
      })
    );

    details.current.attendees = students;
  }

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <div>
      <Button
        className={styles.signupButton}
        colorScheme="blue"
        onClick={() => dispatch(setDetails(details.current))}
        width="150px"
        height="50px"
        variant="outline"
        fontSize="10pt"
      >
        {c.name} <br />
        {c.start.substring(0, 5)} - {c.end.substring(0, 5)}
      </Button>
    </div>
  );
}
