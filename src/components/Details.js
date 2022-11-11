import { useState, useEffect, useRef } from "react";
import { DetailsContext } from "../components/Class";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Details() {
  const [test, setTest] = useState([]);
  return (
    <DetailsContext.Consumer>
      {(details) => {
        setTest(details);
        console.log("test");
        console.log(test);
        return (
          <Button
            onClick={() => {
              console.log(details);
            }}
          >
            Button
          </Button>
        );
        // values.map((name) => {
        //   return <p key={uuidv4()}>{name}</p>;
        // });
      }}
    </DetailsContext.Consumer>
  );
}
