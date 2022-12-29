import { useState } from "react";
import styles from "../../styles/Menu.module.css";
import Image from "next/image";
import ProgressCircle from "./ProgressCircle";
import "@aws-amplify/ui-react/styles.css";
import UserPool from "../UserPool";
import MenuTool from "./MenuTool";
import MenuToolSmall from "./MenuToolSmall";
import { Power } from "tabler-icons-react";
import { useEffect } from "react";

export default function Menu({ selected }) {
  const currentUser = UserPool.getCurrentUser();
  const [page, setPage] = useState("Classes");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (selected != null) {
      setPage(selected);
    }
  }, []);

  async function debug() {
    console.log("debugging...");
  }

  return (
    <div className={styles.toolbar}>
      <img src="/serao-transparent-black.png" className={styles.serao} />

      <a href="/">
        <MenuTool text="Classes" selected={selected} />
      </a>
      <a href="/profile">
        <MenuTool text="Profile" selected={selected} />
      </a>
      <a href="/leaderboard">
        <MenuTool text="Leaderboard" selected={selected} />
      </a>

      <hr className={styles.hl} />

      <div
        className="container"
        onClick={() => {
          setAdmin(!admin);
        }}
      >
        <MenuTool text="Admin" selected={selected} class="admin" />
      </div>

      <div className={(admin === true ? "show" : "") + " dropdown"}>
        <div className={styles.dropdown} id="dropdown">
          <a href="/manage-attendees">
            <MenuToolSmall text="Manage Attendees" selected={selected} />
          </a>
          <a href="/manage-classes">
            <MenuToolSmall text="Manage Classes" selected={selected} />
          </a>
          <a href="/manage-users">
            <MenuToolSmall text="Manage Users" selected={selected} />
          </a>
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
      {/* <Button
          mt={4}
          colorScheme="teal"
          style={{ marginRight: "8px" }}
          onClick={debug}
          width="140px"
        >
          Debug
        </Button> */}
      <ProgressCircle />
    </div>
  );
}
