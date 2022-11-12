import React, { useEffect, useRef, useState, useContext } from "react";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import { Textarea } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";

export const DetailsContext = React.createContext();

export default function Class({ c }) {
  const attendees = useRef([]);
  const [details, setDetails] = useState();

  useEffect(() => {
    async function fetchAttendees() {
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

      // console.log(classAttendees.data.listAttendees.items);

      classAttendees.data.listAttendees.items.forEach((attendee) =>
        students.push(attendee.firstName)
      );

      students.forEach((student) => console.log(student));

      attendees.current = students;
      // console.log("students");
      // console.log(students);
      // console.log(typeof students);
    }

    fetchAttendees();
  }, []);

  return (
    <div>
      <DetailsContext.Provider value={details}>
        <Button
          className={styles.signupButton}
          colorScheme="blue"
          onClick={() => {
            console.log(attendees.current);
            setDetails(attendees.current);
            console.log("details");
            console.log(details);
          }}
          width="150px"
          height="50px"
          variant="outline"
          fontSize="10pt"
        >
          {c.name} <br />
          {c.start.substring(0, 5)} - {c.end.substring(0, 5)}
        </Button>
      </DetailsContext.Provider>
    </div>
  );
}
