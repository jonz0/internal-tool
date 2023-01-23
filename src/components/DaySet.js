import { API } from "aws-amplify";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Day from "../components/Day";
import * as queries from "../graphql/queries";

export default function DaySet({ exclude }) {
  const [numDays, setNumDays] = useState(0);

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
