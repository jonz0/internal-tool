import styles from "../../styles/Menu.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Alert,
  AlertIcon,
  StylesProvider,
} from "@chakra-ui/react";

export default function ProgressCircle({ index }) {
  const progress = 12;
  const [goal, setGoal] = useState();
  const [final, setFinal] = useState(0);
  const percentage =
    progress / final > 1 ? (final == 0 ? 0 : 100) : (progress / final) * 100;
  const shownPercentage = final !== 0 ? percentage : 0;

  function submitGoal() {
    setFinal(goal);
  }

  return (
    <div className={styles.progressCard}>
      {!(final > 0) && (
        <p
          style={{
            textAlign: "center",
            marginBottom: "12px",
            fontWeight: "600",
            fontSize: "14pt",
          }}
        >
          Set a weekly goal:
        </p>
      )}
      {final > 0 && (
        <p
          style={{
            textAlign: "center",
            marginBottom: "12px",
            fontWeight: "600",
            fontSize: "14pt",
          }}
        >
          Current Progress:
        </p>
      )}
      <CircularProgressbar value={shownPercentage} text={`${percentage}%`} />;
      {final > 0 && (
        <p style={{ textAlign: "center", marginTop: "-5px" }}>
          {progress} out of {final} hours
        </p>
      )}
      {final == 0 && (
        <form
          onSubmit={submitGoal}
          className={styles.form}
          style={{ marginTop: "-5px" }}
        >
          <div className={styles.inputContainer}>
            <Input
              id="goal"
              type="text"
              value={goal}
              onChange={(event) => {
                setGoal(event.target.value);
              }}
              color="gray"
              placeholder="Hours"
              _placeholder={{ color: "inherit" }}
              autoComplete="off"
              height="33px"
              fontSize="10pt"
            />
          </div>
          <Button
            colorScheme="blue"
            className={styles.submitButtons}
            size="md"
            type="submit"
            height="33px"
            fontSize="10pt"
          >
            Set Goal
          </Button>
        </form>
      )}
    </div>
  );
}
