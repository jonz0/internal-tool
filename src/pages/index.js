import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Monday from "../components/Monday";
import { v4 as uuidv4 } from "uuid";
import { DataStore } from "aws-amplify";
import { Post, Comment, Blog } from "../models";
import { Datastore, Predicates } from "@aws-amplify/datastore";
import Amplify from "@aws-amplify/core";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";

async function addItem() {
  // try {
  //   await DataStore.save(
  //     new Post({
  //       title: "My First Post",
  //     })
  //   );
  //   console.log("Post saved successfully!");
  // } catch (error) {
  //   console.log("Error saving post", error);
  // }

  const todoDetails = {
    title: "My first Post",
  };

  const newTodo = await API.graphql({
    query: mutations.createPost,
    variables: { input: todoDetails },
  });

  console.log("success!");
}

async function getItem() {
  const allPosts = await API.graphql({ query: queries.listPosts });
  console.log(allPosts);
}
export default function Home() {
  return (
    <div className="signup-container">
      <Monday />
      <p className="test">Test</p>

      <button type="button" onClick={() => addItem()}>
        Add item
      </button>

      <button type="button" onClick={() => getItem()}>
        Get item
      </button>
    </div>
  );
}
