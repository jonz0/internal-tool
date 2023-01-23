import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Admin.module.css";
import { setToRemove } from "../features/class/removeStaging";

export default function RemoveUser({ attendee }) {
  const details = useSelector((state) => state.removeStaging.value);
  const belts = ["⬜", "🟨", "🟧", "🟦", "🟪", "🟫", "⬛"];
  const dispatch = useDispatch();

  async function addAttendeeToStaging() {
    dispatch(setToRemove(attendee.id));
  }

  return (
    <div>
      <div className={styles.userContainer}>
        <Button
          className={styles.removeButton}
          colorScheme="orange"
          size="sm"
          height="20px"
          fontSize="9pt"
          onClick={addAttendeeToStaging}
        >
          Remove
        </Button>
        <p key={uuidv4()} className={styles.attendeeName}>
          {belts[attendee.jjbelt]} {attendee.name}
        </p>
      </div>
    </div>
  );
}
