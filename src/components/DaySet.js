import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../../styles/Home.module.css";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import Day from "../components/Day";
import { resolve } from "styled-jsx/css";

export default function DaySet({ exclude }) {
  const [numDays, setNumDays] = useState(0);

  // Test comment

  async function getDays() {
    const days = await API.graphql({
      query: queries.listDays,
    });
    return days.data.listDays.items.length;
  }

  getDays().then((ret) => {
    setNumDays(ret);
  });

  return Array.from(Array(numDays).keys()).map((day) => {
    return <Day key={uuidv4()} increment={day} exclude={exclude} />;
  });
}
