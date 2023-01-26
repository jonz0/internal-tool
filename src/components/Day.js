import styles from "../../styles/Home.module.css";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Class from "./Class";
import * as queries from "../graphql/queries";
import AdminClass from "./AdminClass";

export default function Day({ increment, exclude, admin }) {
  let date = new Date();
  date.setDate(date.getDate() + increment);
  const day = date
    .toLocaleDateString("default", { weekday: "long" })
    .toLowerCase();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  async function fetchClasses() {
    const classes = await API.graphql({
      query: queries.listClasses,
      variables: {
        filter: {
          dayClassesId: {
            eq: day,
          },
          age: {
            ne: exclude,
          },
        },
      },
    });

    let sorted = classes.data.listClasses.items.sort(function (a, b) {
      return a.id.substring(0, 4) - b.id.substring(0, 4);
    });

    setClasses(sorted);
  }

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
      {classes.length !== 0 ? (
        classes.map((c) => {
          return admin ? (
            <AdminClass key={uuidv4()} c={c} />
          ) : (
            <Class key={uuidv4()} c={c} />
          );
        })
      ) : (
        <Class key={uuidv4()} c={null} />
      )}
    </div>
  );
}
