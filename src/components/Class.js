import { useEffect, useRef, useState, useContext } from "react";
import { Button } from "@chakra-ui/react";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import styles from "../../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setDetails } from "../features/class/detailsSlice";

export default function Class({ c }) {
  const dispatch = useDispatch();

  if (c == null) {
    return (
      <div>
        <Button
          className={styles.signupButton}
          colorScheme="gray"
          width="150px"
          height="50px"
          variant="outline"
          fontSize="10pt"
          isDisabled={true}
          border="2px"
        >
          No Classes
        </Button>
      </div>
    );
  }

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

  function halfDayFormat(hour) {
    return ((hour + 11) % 12) + 1;
  }

  function getSuffix(hours) {
    return hours <= 12 ? "am" : "pm";
  }

  function getRangeReadable(classData) {
    let startHour = parseInt(classData.start.slice(0, 2));
    let endHour = parseInt(classData.end.slice(0, 2));
    let startMinutes = parseInt(classData.start.slice(3, 5));
    let endMinutes = parseInt(classData.end.slice(3, 5));

    // let startRange =
    //   halfDayFormat(startHour) +
    //   (startMinutes == 0 ? "" : ":" + startMinutes) +
    //   (getSuffix(startHour) == getSuffix(endHour) ? "" : getSuffix(startHour));

    let startRange =
      halfDayFormat(startHour) + (startMinutes == 0 ? "" : ":" + startMinutes);

    let endRange =
      halfDayFormat(endHour) +
      (endMinutes == 0 ? "" : ":" + endMinutes) +
      getSuffix(endHour);

    return startRange + " - " + endRange;
  }

  return (
    <div>
      <Button
        className={styles.signupButton}
        colorScheme="gray"
        onClick={() => dispatch(setDetails(details.current))}
        width="160px"
        height="58px"
        variant="outline"
        border="2px"
        fontSize="10pt"
        textAlign="left"
        borderRadius="12px"
      >
        <div className={styles.classButton}>
          <p className={styles.classTime}>{getRangeReadable(c)}</p>
          <p className={styles.className}>{c.name}</p>
        </div>
      </Button>
    </div>
  );
}
