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
import Class from "../components/Class";

export default function Home() {
  const [names, setNames] = useState([]);

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
          <DaySet fetchDetails={fetchDetails} />
        </div>
        <div className="details-container">
          <h1>Details</h1>
          {names.map((name) => {
            return <p key={uuidv4()}>{name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
