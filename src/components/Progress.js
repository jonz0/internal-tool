import styles from "../../styles/Menu.module.css";
import { CircularProgressbar } from "react-circular-progressbar";

export default function Progress({ index }) {
  const progress = 12;
  const goal = 20;
  const percentage = (progress / goal) * 100;

  return (
    <div className={styles.progressCard}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
      <p style={{ textAlign: "center" }}>Set a goal</p>
      <p style={{ textAlign: "center" }}>
        {progress} out of {goal} hours
      </p>
    </div>
  );
}
