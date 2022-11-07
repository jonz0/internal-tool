import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { API } from "aws-amplify";
import * as mutations from "./graphql/mutations";
import Monday from "../components/Monday";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  return (
    <div className="signup-container">
      <Monday />
      <p className="test">Test</p>
    </div>
  );
}
