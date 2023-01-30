import { Button } from "@chakra-ui/react";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";
import { setDetails } from "../features/class/detailsSlice";
import { clearStaging } from "../features/class/removeStaging";
import { addSelect, clearSelect } from "../features/class/selectedSlice";
import * as queries from "../graphql/queries";

function AdminClass({ c, selects }) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  const selectState = useSelector((state) => state.selected.value);

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

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    setSelected(c.id == selects[0]);
    if (selectState.length == 1 && selectState[0] == c.id) {
      fetchDetails();
    }
  }, [selects]);

  const [det, setDet] = useState({
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

  async function fetchDetails() {
    let students = [];
    let sorted = [];

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

    if (c.type == "jj") {
      sorted = students.sort((a, b) => (a.jjbelt < b.jjbelt ? 1 : -1));
    } else {
      sorted = students.sort((a, b) => (a.llbelt < b.llbelt ? 1 : -1));
    }

    setDet({
      id: c.id,
      name: c.name,
      start: c.start,
      end: c.end,
      type: c.type,
      maxSpots: c.maxSpots,
      openSpots: c.openSpots,
      classOpen: c.classOpen,
      attendees: sorted,
      message: c.message,
      instructor: c.instructor,
    });

    dispatch(
      setDetails({
        id: c.id,
        name: c.name,
        start: c.start,
        end: c.end,
        type: c.type,
        maxSpots: c.maxSpots,
        openSpots: c.openSpots,
        classOpen: c.classOpen,
        attendees: sorted,
        message: c.message,
        instructor: c.instructor,
      })
    );
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
    return hours < 12 ? "am" : "pm";
  }

  function getRangeReadable(classData) {
    let startHour = parseInt(classData.start.slice(0, 2));
    let endHour = parseInt(classData.end.slice(0, 2));
    let startMinutes = parseInt(classData.start.slice(3, 5));
    let endMinutes = parseInt(classData.end.slice(3, 5));

    let startRange =
      halfDayFormat(startHour) +
      (startMinutes == 0
        ? ""
        : ":" + (startMinutes < 10 ? "0" + startMinutes : startMinutes));

    let endRange =
      halfDayFormat(endHour) +
      (endMinutes == 0 ? "" : ":" + endMinutes) +
      getSuffix(endHour);

    return startRange + " - " + endRange;
  }

  function handleClick() {
    dispatch(clearStaging());
    dispatch(clearSelect());
    dispatch(addSelect(c.id));
    dispatch(setDetails(det));
  }

  function handleHover() {
    console.log("hovered over", c.id);
  }

  return (
    <div>
      <Button
        className={styles.signupButton}
        style={selected ? { backgroundColor: "#d8ebfc" } : {}}
        colorScheme={selected ? "blue" : "gray"}
        onClick={handleClick}
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

const mapStateToProps = function (state) {
  return {
    selects: state.selected.value,
  };
};

export default connect(mapStateToProps)(AdminClass);
