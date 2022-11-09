import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/Signup.module.css";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import { Class } from "./Class";

export default function Day({ increment, fetchDetails }) {
  function getDay() {
    let date = new Date();
    date.setDate(date.getDate() + increment);

    return date.toLocaleDateString("default", { weekday: "long" });
  }

  async function handleDetails() {
    // function fetchDetails(attendees, instructor, message, spotsAvailable, spotsTaken)
    let students = [];
    // let instructor = null;
    // let message = null;
    // let spotsAvailable = null;
    // let spotsTaken = null;

    const classAttendees = await API.graphql({
      query: queries.listAttendees,
      variables: {
        filter: {
          classAttendeesId: {
            eq: "0800-mon",
          },
        },
      },
    });

    classAttendees.data.listAttendees.items.forEach((attendee) =>
      students.push(attendee.firstName)
    );

    fetchDetails(students);
  }

  return (
    <div className={styles.slot}>
      <h1 className={styles.day}>{getDay()}</h1>

      <button type="button" onClick={() => handleDetails()}>
        Fetch Data
      </button>
    </div>
  );
}
