import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Day from "../components/Day";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import DaySet from "../components/DaySet";
import { useState, useEffect, useRef } from "react";
import Details from "../components/Details";

async function listAll() {
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
    console.log(attendee.name)
  );
}

async function addItem() {
  try {
    const attendee = {
      id: "jonathan",
      name: "jonathan",
    };

    const newAttendee = await API.graphql({
      query: mutations.createAttendee,
      variables: { input: attendee },
    });
    console.log("Attendee saved successfully!");
  } catch (error) {
    console.log("Error saving attendee", error);
  }
}

async function getItem() {
  const allPosts = await API.graphql({ query: queries.listPosts });
  console.log(allPosts);
}

function getDate() {
  return new Date().toLocaleDateString("default", { weekday: "long" });
}

function returnDayComponents() {
  for (let i = 0; i < 7; i++) {
    return <Day increment={i} />;
  }
}

async function getDays() {
  const fetchDays = await API.graphql({
    query: queries.listDays,
  });
  // console.log(fetchDays.data.listDays.items.length);
  return fetchDays.data.listDays.items.length;
}

export default function Home() {
  let [names, setNames] = useState([]);

  function fetchDetails(attendees) {
    setNames(attendees);
  }

  return (
    <div className="page-container">
      <div className="toolbar-container">
        <div className="toolkit">
          <p className="tools">Home</p>
          <p className="tools">Profile</p>
          <p className="tools">Sign Out</p>
        </div>
      </div>
      <div className="calendar-container">
        <div className="signup-container">
          <DaySet
            days={() => {
              getDays().then((ret) => {
                return ret;
              });
            }}
            fetchDetails={fetchDetails}
          />
        </div>
        <div className="details-container">
          <h1>Details</h1>
          {names.map((name) => {
            return <p key={uuidv4()}>{name}</p>;
          })}
        </div>
      </div>

      <button type="button" onClick={() => addItem()}>
        Add item
      </button>
      <button type="button" onClick={() => listAll()}>
        List all
      </button>
      <button type="button" onClick={() => getDays()}>
        Get days
      </button>
    </div>
  );
}
