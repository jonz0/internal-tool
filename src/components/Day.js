import styles from "../../styles/Home.module.css";
import ClassSet from "./ClassSet";

export default function Day({ increment, exclude }) {
  let date = new Date();
  date.setDate(date.getDate() + increment);

  return (
    <div>
      <div className={styles.dateContainer}>
        {increment == 0 && <div className={styles.hl} />}
        <div className={styles.dayContainer}>
          <p className={styles.day}>
            {date
              .toLocaleDateString("default", { weekday: "short" })
              .toUpperCase()}
          </p>
          <p className={styles.date}>{date.getDate()}</p>
        </div>
      </div>
      <ClassSet
        day={date
          .toLocaleDateString("default", { weekday: "long" })
          .toLowerCase()}
        exclude={exclude}
      ></ClassSet>
    </div>
  );
}
