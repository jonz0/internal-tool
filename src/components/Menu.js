import { useState } from "react";
import styles from "../../styles/Menu.module.css";
import ProgressCircle from "./ProgressCircle";
import "@aws-amplify/ui-react/styles.css";
import UserPool from "../UserPool";
import MenuTool from "./MenuTool";
import MenuToolSmall from "./MenuToolSmall";
import { Power } from "tabler-icons-react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setManage } from "../features/class/adminSlice";
var AWS = require("aws-sdk");
import S3 from "react-aws-s3";
import { Alert, AlertIcon, Avatar, Button, Input } from "@chakra-ui/react";

export default function Menu({ selected }) {
  const [page, setPage] = useState("Classes");
  const [admin, setAdmin] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  var AWS = require("aws-sdk");
  AWS.config.update({
    accessKeyId: "AKIAZYYIRAJWQ7YS5E6E",
    secretAccessKey: "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",
  });

  const config = {
    bucketName: "amplify-calendarsignup-dev-20052-deployment",
    dirName: "photos",
    region: "us-west-1",
    accessKeyId: "AKIAZYYIRAJWQ7YS5E6E",
    secretAccessKey: "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",
  };

  const ReactS3Client = new S3(config);

  useEffect(() => {
    if (selected != null) {
      if (selected == "Admin") {
        setAdmin(true);
      }
      setPage(selected);
    }
  }, []);

  return (
    <div className={styles.toolbar}>
      <img src="/serao-transparent-black.png" className={styles.serao} />

      <div
        onClick={() => {
          router.push("/");
        }}
      >
        <MenuTool text="Classes" selected={selected} />
      </div>
      <div
        onClick={() => {
          dispatch(setManage(""));
          router.push("/profile");
        }}
      >
        <MenuTool text="Profile" selected={selected} />
      </div>
      <div
        onClick={() => {
          dispatch(setManage(""));
          router.push("/leaderboard");
        }}
      >
        <MenuTool text="Leaderboard" selected={selected} />
      </div>

      <hr className={styles.hl} />

      <div
        className="container"
        onClick={() => {
          dispatch(setManage(""));
          setAdmin(!admin);
        }}
      >
        <MenuTool
          text="Admin"
          selected={selected}
          class="admin"
          clicked={admin}
        />
      </div>

      <div className={(admin ? "show" : "") + " dropdown"}>
        <div className={styles.dropdown} id="dropdown">
          <MenuToolSmall text="Manage Attendees" selected={selected} />
          <MenuToolSmall text="Manage Classes" selected={selected} />
          <MenuToolSmall text="Manage Users" selected={selected} />
        </div>
      </div>

      <div
        className={styles.tool}
        onClick={() => {
          const currentUser = UserPool.getCurrentUser();

          if (currentUser != null) {
            currentUser.signOut();
          }

          window.location.reload();
        }}
      >
        <Power
          size={24}
          strokeWidth={2}
          color={"black"}
          className={styles.toolIcon}
        />
        <p className={styles.toolText}>Sign Out</p>
      </div>
      <ProgressCircle />
    </div>
  );
}
