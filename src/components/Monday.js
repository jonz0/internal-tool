import React from "react";
import { API } from "aws-amplify";
import { useState } from "react";
import styles from "../../styles/Signup.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Monday() {
  let [names, setNames] = useState([]);

  function getDate() {
    return new Date().toISOString().slice(0, 10);
  }

  async function addItem() {
    const userDetails = {
      id: "12341234",
      name: "Sam",
      description: "Learn AWS AppSync",
    };

    const newTodo = await API.graphql({
      query: mutations.createUser,
      variables: { input: userDetails },
    });

    console.log("success!");
  }

  function addName(name) {
    setNames((prevNames) => {
      return [...prevNames, name];
    });
    console.log(names);
  }

  return (
    <div className="component-container">
      <p>{getDate()}</p>
      {names.map((name) => {
        return (
          <p key={uuidv4()} className="name">
            {name}
          </p>
        );
      })}

      <button type="button" onClick={() => addItem()}>
        Add item
      </button>

      <button type="button" onClick={() => addName("John Doe")}>
        Add name
      </button>
    </div>
  );
}
