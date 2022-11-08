import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/Signup.module.css";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";

export default function Day({ increment }) {
  const [names, setNames] = useState([]);

  useEffect(() => {
    async function updateNames() {
      let names = [];

      let filter = {
        classAttendeesId: {
          eq: "0700-mon",
        },
      };

      const monAttendees = await API.graphql({
        query: queries.listAttendees,
        variables: { filter: filter },
      });

      monAttendees.data.listAttendees.items.forEach((attendee) =>
        names.push(attendee.name)
      );

      setNames(names);
    }
    updateNames();
  }, []);

  function addName(name) {
    setNames((prevNames) => {
      return [...prevNames, name];
    });
    console.log(names);
  }

  function getDay() {
    let date = new Date();
    date.setDate(date.getDate() + increment);

    return date.toLocaleDateString("default", { weekday: "long" });
  }

  return (
    <div className="component-container">
      <h1>{getDay()}</h1>
      {names.map((name) => {
        return (
          <p key={uuidv4()} className="name">
            {name}
          </p>
        );
      })}

      <button type="button" onClick={() => addName("John Doe")}>
        Add name
      </button>
    </div>
  );
}
