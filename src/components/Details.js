import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Home.module.css";

export default function Details() {
  const detailsState = useSelector((state) => state.details.value);
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

  return (
    <div className={styles.testDiv}>
      <div className={styles.details}>
        <div className={styles.detailsHeaders}>
          <p className={styles.detailsHeader}>Details</p>
          <p className={styles.attendeesHeader}>Attendees</p>
        </div>
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.detailsLeft}>
          <p>
            <b>Class:</b> {detailsState.name}
          </p>
          <p>
            <b>Instructor:</b> {detailsState.instructor}
          </p>
          <p>
            <b>Availability:</b> {detailsState.openSpots} out of{" "}
            {detailsState.maxSpots}
          </p>
          <p>
            <b>Message:</b> {detailsState.message}
          </p>
        </div>

        <div className={styles.detailsRight}>
          {detailsState.attendees.map((attendee) => (
            <p key={uuidv4()} className={styles.attendeeName}>
              {getBelt(attendee)} {attendee.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
