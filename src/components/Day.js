import styles from "../../styles/Home.module.css";
import ClassSet from "./ClassSet";

export default function Day({ increment, exclude }) {
  function getDay() {
    let date = new Date();
    date.setDate(date.getDate() + increment);

    return date.toLocaleDateString("default", { weekday: "long" });
  }

  return (
    <div className={styles.slot}>
      <p className={styles.day}>{getDay()}</p>
      <ClassSet day={getDay().toLowerCase()} exclude={exclude}></ClassSet>
    </div>
  );
}
