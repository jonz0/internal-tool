import { useState, useEffect, useRef } from "react";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import Rank from "../components/Rank";
import { v4 as uuidv4 } from "uuid";

export default function Rankings({ leaders }) {
  return leaders.map((c, index) => {
    console.log("generating user", c.id);
    return <Rank rank={index + 1} user={c} key={uuidv4()} />;
  });
}
