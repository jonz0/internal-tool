import { useState, useEffect, useRef, useContext } from "react";
import { DetailsContext } from "./Class";

import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Details() {
  const students = useContext(DetailsContext);
  const [attendees, setATtendees] = useState([]);
  return (
    <Button
      onClick={() => {
        console.log("STUDENTS");
        console.log(students);
      }}
    >
      STUDENTS
    </Button>
  );

  // return attendees.map((name) => {
  //   return <p key={uuidv4()}>{name}</p>;
  // });
}
