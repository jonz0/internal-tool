import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Home.module.css";

export default function Details() {
  const detailsState = useSelector((state) => state.details.value);
  const belts = [
    "/white-belt-icon.png",
    "/yellow-belt-icon.png",
    "/orange-belt-icon.png",
    "/blue-belt-icon.png",
    "/purple-belt-icon.png",
    "/brown-belt-icon.png",
    "/black-belt-icon.png",
  ];
  const classType = detailsState.type;

  function getBelt(attendee) {
    if (classType == "jj") {
      return belts[attendee.jjbelt];
    } else if (classType == "ll") {
      return belts[attendee.llbelt];
    }
  }

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsContents}>
        <div className={styles.detailsLeft}>
          <p className={styles.detailsHeader}>Details</p>
          <p className={styles.detailsText}>
            <b>Class:</b> {detailsState.name}
          </p>
          <p className={styles.detailsText}>
            <b>Instructor:</b> {detailsState.instructor}
          </p>
          <p className={styles.detailsText}>
            {/* <b>Availability:</b> {detailsState.openSpots} out of{" "} */}
            <b>Availability:</b> 23 out of {detailsState.maxSpots}
          </p>
          <p className={styles.detailsText}>
            <b>Content:</b> {detailsState.message}
          </p>
        </div>

        <div>
          <p className={styles.attendeesHeader}>Attendees</p>
          <div className={styles.detailsRight}>
            {detailsState.attendees.map((attendee) => (
              <p key={uuidv4()} className={styles.attendee}>
                {/* <p className={styles.beltColor}>{getBelt(attendee)}</p> */}
                <img src={getBelt(attendee)} className={styles.beltImg} />
                <p className={styles.attendeeName}>{attendee.name}</p>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
