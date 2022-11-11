import React from "react";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import { Textarea } from "@chakra-ui/react";
import styles from "../../styles/Signup.module.css";

export default function Class({ fetchDetails, c }) {
  async function handleDetails() {
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
      students.push(attendee.firstName)
    );

    fetchDetails(students);
  }

  return (
    <div>
      <Button
        className={styles.signupButton}
        colorScheme="blue"
        onClick={() => handleDetails()}
        width="200px"
        height="50px"
        variant="outline"
      >
        {c.name} <br />
        {c.start.substring(0, 5)} - {c.end.substring(0, 5)}
      </Button>
    </div>
  );
}
