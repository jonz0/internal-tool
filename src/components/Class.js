import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { API } from "aws-amplify";
import styles from "../../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setDetails } from "../features/class/detailsSlice";
import * as queries from "../graphql/queries";
import { addSelect, removeSelect } from "../features/class/selectedSlice";
import { connect } from "react-redux";

function Class({ c, admin }, enrolled) {
  const dispatch = useDispatch();
  const confirmedState = useSelector((state) => state.confirmed.value);
  const [selected, setSelected] = useState(
    c !== null && confirmedState.includes(c.id) ? true : false
  );

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

  enrolled = confirmedState;

  useEffect(() => {
    fetchDetails();
    console.log("Admin", admin);
  }, [enrolled]);

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
    console.log(admin);
    dispatch(setDetails(det));
    if (admin) {
      if (enrolled.includes(c.id)) {
        if (selected) {
          dispatch(addSelect(c.id));
          return setSelected(false);
        }
        dispatch(removeSelect(c.id));
        return setSelected(true);
      }

      if (!selected) {
        dispatch(addSelect(c.id));
        setSelected(true);
      } else {
        dispatch(removeSelect(c.id));
        setSelected(false);
      }
      return;
    }
    setSelected((prevState) => !prevState);
  }

  function handleHover() {
    console.log("hovered over", c.id);
  }

  return (
    <div>
      <Button
        className={styles.signupButton}
        style={
          !admin
            ? !selected
              ? {}
              : enrolled.includes(c.id)
              ? { backgroundColor: "#e3fae1" }
              : { backgroundColor: "#d8ebfc" }
            : selected
            ? { backgroundColor: "#d8ebfc" }
            : {}
        }
        colorScheme={
          !admin
            ? !selected
              ? "gray"
              : enrolled.includes(c.id)
              ? "green"
              : "blue"
            : selected
            ? "blue"
            : "gray"
        }
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
    enrolled: state.confirmed.value,
  };
};

export default connect(mapStateToProps)(Class);
