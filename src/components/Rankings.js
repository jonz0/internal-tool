import { useState, useEffect, useRef } from "react";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import Rank from "../components/Rank";

export default function Rankings({ exclude }) {
  const [numDays, setNumDays] = useState(0);
  const rankings = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  async function getDays() {
    const days = await API.graphql({
      query: queries.listDays,
    });
    return days.data.listDays.items.length;
  }

  getDays().then((ret) => {
    setNumDays(ret);
  });

  return rankings.map((c) => {
    return <Rank rank={c} name="Jackie Chan" />;
  });
}
