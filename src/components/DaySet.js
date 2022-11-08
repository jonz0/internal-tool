import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/Signup.module.css";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";

export default function DaySet({ days }) {}
