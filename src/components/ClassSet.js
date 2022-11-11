import React from "react";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import Day from "../components/Day";
import Class from "../components/Class";
import { resolve } from "styled-jsx/css";

export default function ClassSet({ day, fetchDetails }) {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  async function fetchClasses() {
    const classes = await API.graphql({
      query: queries.listClasses,
      variables: {
        filter: {
          dayClassesId: {
            eq: day,
          },
        },
      },
    });

    let sorted = classes.data.listClasses.items.sort(function (a, b) {
      return a.id.substring(0, 4) - b.id.substring(0, 4);
    });

    setClasses(sorted);
  }

  return classes.map((c) => {
    return <Class key={uuidv4()} c={c} fetchDetails={fetchDetails} />;
  });
}
