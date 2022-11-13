import { useState, useEffect, useRef, useContext } from "react";
import { DetailsContext } from "./Class";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export default function Details() {
  const attendees = useSelector((state) => state.attendees.value);
  return attendees.map((name) => {
    return <p key={uuidv4()}>{name}</p>;
  });
}
