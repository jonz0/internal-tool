import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Admin.module.css";
import {
  setToRemove,
  deselect,
  clearStaging,
} from "../features/class/removeStaging";

export default function RemoveUser({ attendee }) {
  const details = useSelector((state) => state.removeStaging.value);
  const belts = ["⬜", "🟨", "🟧", "🟦", "🟪", "🟫", "⬛"];
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(details.includes(attendee.id));

  async function addAttendeeToStaging() {
    if (!details.includes(attendee.id)) {
      dispatch(setToRemove(attendee.id));
    } else {
      dispatch(deselect(attendee.id));
    }
  }

  return (
    <div>
      <div className={styles.userContainer}>
        <Button
          className={styles.removeButton}
          colorScheme={selected ? "orange" : "gray"}
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
