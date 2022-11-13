import { useState, useEffect, useRef, useContext } from "react";
import { DetailsContext } from "./Class";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export default function Details() {
  const details = useSelector((state) => state.details.value);

  return (
    <div>
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

      <p>
        <b>Class:</b> {details.name}
      </p>
      <p>
        <b>Instructor:</b> {details.instructor}
      </p>
      <p>
        <b>Type:</b> {details.type}
      </p>
      <p>
        <b>Availability:</b> {details.openSpots} out of {details.maxSpots}
      </p>
      <br />
      <p>
        <b>Attendees:</b>
      </p>
      {details.attendees.map((name) => (
        <p key={uuidv4()}>{name}</p>
      ))}
    </div>
  );
}
