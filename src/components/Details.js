import { useState, useEffect, useRef } from "react";

export default function Details(attendees) {
  return attendees.attendees.map((name) => {
    return <p key={uuidv4()}>{name}</p>;
  });
}
