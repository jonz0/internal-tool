import { useState, useEffect, useRef, useContext } from "react";
import { DetailsContext } from "./Class";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Home.module.css";

export default function Details() {
  const details = useSelector((state) => state.details.value);
  const belts = ["⬜", "🟨", "🟧", "🟦", "🟪", "🟫", "⬛"];
  const awards = ["🥋", "🤼‍♂️", "🐯", "🥊"];
  const ranks = ["🥉", "🥈", "🥇"];

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsLeft}>
        <p>
          <b>Class:</b> {details.name}
        </p>
        <p>
          <b>Type:</b> {details.type}
        </p>
        <p>
          <b>Instructor:</b> {details.instructor}
        </p>
        <p>
          <b>Availability:</b> {details.openSpots} out of {details.maxSpots}
        </p>
        <p>
          <b>Message:</b>
        </p>
      </div>
      <div className={styles.detailsRight}>
        {details.attendees.map((attendee) => (
          <p key={uuidv4()}>
            {belts[attendee.jjbelt]} {attendee.jjbelt} {attendee.name}
          </p>
        ))}
      </div>

      {/* <p>Class: {details.name}</p>
      <p>Instructor: {details.instructor}</p>
      <p>Type: {details.type}</p>
      <p>
        Availability: {details.openSpots} out of {details.maxSpots}
      </p>
      <br />
      <p>Attendees:</p>
      {details.attendees.map((name) => (
        <p key={uuidv4()}>{name}</p>
      ))} */}
    </div>
  );
}
