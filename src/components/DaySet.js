import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/Signup.module.css";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import Day from "../components/Day";

export default function DaySet({ days, fetchDetails }) {
  return Array.from(Array(7).keys()).map((day) => {
    return <Day key={uuidv4()} increment={day} fetchDetails={fetchDetails} />;
  });
}
