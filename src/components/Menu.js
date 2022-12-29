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
import { useRouter } from "next/router";

export default function Menu({ selected }) {
  const currentUser = UserPool.getCurrentUser();
  const [page, setPage] = useState("Classes");
  const [admin, setAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (selected != null) {
      if (selected == "Admin") {
        setAdmin(true);
      }
      setPage(selected);
    }
  }, []);

  async function debug() {
    console.log("debugging...");
  }

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
          router.push("/profile");
        }}
      >
        <MenuTool text="Profile" selected={selected} />
      </div>
      <div
        onClick={() => {
          router.push("/leaderboard");
        }}
      >
        <MenuTool text="Leaderboard" selected={selected} />
      </div>

      <hr className={styles.hl} />

      <div
        className="container"
        onClick={() => {
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
