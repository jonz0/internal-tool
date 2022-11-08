import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Day from "../components/Day";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import DaySet from "../components/DaySet";

async function listAll() {
  let filter = {
    classAttendeesId: {
      eq: "0700-mon",
    },
  };
  const monAttendees = await API.graphql({
    query: queries.listAttendees,
    variables: { filter: filter },
  });

  monAttendees.data.listAttendees.items.forEach((attendee) =>
    console.log(attendee.name)
  );
}

async function addItem() {
  try {
    const attendee = {
      id: "jonathan",
      name: "jonathan",
    };

    const newAttendee = await API.graphql({
      query: mutations.createAttendee,
      variables: { input: attendee },
    });
    console.log("Attendee saved successfully!");
  } catch (error) {
    console.log("Error saving attendee", error);
  }
}

async function getItem() {
  const allPosts = await API.graphql({ query: queries.listPosts });
  console.log(allPosts);
}

function getDate() {
  return new Date().toLocaleDateString("default", { weekday: "long" });
}

function returnDayComponents() {
  for (let i = 0; i < 7; i++) {
    return <Day increment={i} />;
  }
}

export default function Home() {
  return (
    <div className="signup-container">
      <Day increment={0} />
      <Day increment={1} />
      <Day increment={2} />
      <Day increment={3} />
      <Day increment={4} />
      <Day increment={5} />
      <Day increment={6} />
      <button type="button" onClick={() => addItem()}>
        Add item
      </button>
      <button type="button" onClick={() => listAll()}>
        List all
      </button>
      <button type="button" onClick={() => getItem()}>
        Get item
      </button>
    </div>
  );
}
