import styles from "../../styles/Menu.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

export default function ProgressCircle({ index }) {
  const progress = 11;
  const [goal, setGoal] = useState();
  const [final, setFinal] = useState(0);
  const percentage =
    progress == 0
      ? 0
      : final == 0
      ? 0
      : Math.min(Math.round((progress / final) * 100), 100);
  const shownPercentage = final !== 0 ? percentage : 0;

  function submitGoal() {
    if (goal == null || goal == 0) {
      return false;
    }
    setFinal(goal);
  }

  return (
    <div className={styles.progressContainer}>
      <p className={styles.circleTitle}>
        {!(final > 0) ? "Set a weekly goal:" : "Current Progress:"}
      </p>
      <div className={styles.progressCard}>
        <CircularProgressbar
          value={shownPercentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#0f94db",
            pathColor: "#0f94db",
          })}
        />
        <div className={styles.progressRight}>
          {final > 0 && (
            <div className={styles.goalSet}>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "-10px",
                  marginBottom: "5px",
                }}
                className={styles.currentProgress}
              >
                <b>{progress}</b> out of <b>{final}</b> hours
              </p>
              <Button
                colorScheme="red"
                height="28px"
                fontSize="10pt"
                onClick={() => {
                  setFinal(0);
                  setGoal();
                }}
                width="80px"
              >
                Reset
              </Button>
            </div>
          )}
          {final == 0 && (
            <form
              onSubmit={() => {
                event.preventDefault();
                submitGoal();
              }}
              className={styles.form}
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
                  height="28px"
                  fontSize="10pt"
                />
              </div>
              <Button
                colorScheme="blue"
                className={styles.submitButtons}
                size="md"
                type="submit"
                height="28px"
                fontSize="10pt"
              >
                Set Goal
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
