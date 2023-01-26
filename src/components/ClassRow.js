import styles from "../../styles/Admin.module.css";

export default function ClassRow({ rank, cla, editClass, selected }) {
  function getTime(time) {
    let startHour = parseInt(time.slice(0, 2));
    let startMinutes = parseInt(time.slice(3, 5));
    let startTime =
      ((startHour + 11) % 12) +
      1 +
      (startMinutes == 0
        ? ""
        : ":" + (startMinutes < 10 ? "0" + startMinutes : startMinutes));
    let suffix = startHour < 12 ? "am" : "pm";

    return startTime + suffix;
  }

  function handleClick(e) {
    e.preventDefault();
    selected = true;
    editClass(cla);
  }

  return (
    <div
      className={
        selected
          ? styles.rankRowSelected
          : rank % 2 == 0
          ? styles.rankRow
          : styles.rankRowDark
      }
      id={selected ? styles.selected : ""}
      onClick={handleClick}
    >
      <p className={styles.numberHeader}>{rank}</p>
      <p className={styles.dayHeader}>
        {cla.dayClassesId.charAt(0).toUpperCase() + cla.dayClassesId.slice(1)}
      </p>
      <p className={styles.typeHeader}>
        {cla.type == "jj"
          ? "Jiu-Jitsu"
          : cla.type == "ll"
          ? "Luta Livre"
          : "Kickboxing"}
      </p>
      <p className={styles.startHeader}>{getTime(cla.start)}</p>
      <p className={styles.ageHeader}>
        {cla.age == "adults" ? "Adults" : "Kids"}
      </p>
      <p className={styles.statusHeader}>{cla.classOpen ? "Open" : "Closed"}</p>
      <p className={styles.statusHeader}>
        {cla.instructor != null ? cla.instructor.split(" ")[0] : ""}
      </p>
    </div>
  );
}
