import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Class from "../components/Class";
import * as queries from "../graphql/queries";

export default function ClassSet({ day, exclude }) {
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
          age: {
            ne: exclude,
          },
        },
      },
    });

    let sorted = classes.data.listClasses.items.sort(function (a, b) {
      return a.id.substring(0, 4) - b.id.substring(0, 4);
    });

    setClasses(sorted);
    // console.log(day + " " + sorted.length);
  }

  if (classes.length !== 0) {
    return classes.map((c) => {
      return <Class key={uuidv4()} c={c} />;
    });
  } else {
    return <Class key={uuidv4()} c={null} />;
  }
}
