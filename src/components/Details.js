import { useState, useEffect, useRef, useContext } from "react";
import { DetailsContext } from "./Class";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export default function Details() {
  const details = useSelector((state) => state.details.value);

  return (
    <div>
      <p>Class: {details.name}</p>
      <p>Instructor: {details.instructor}</p>
      <p>Type: {details.type}</p>
      <p>
        Availability: {details.openSpots} out of {details.maxSpots}
      </p>
      <br />
      <p>Attendees:</p>
      {details.attendees.map((name) => (
        <p key={uuidv4()}>{name}</p>
      ))}
    </div>
  );
}
