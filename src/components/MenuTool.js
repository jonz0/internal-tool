import { useState } from "react";
import styles from "../../styles/Menu.module.css";
import Image from "next/image";
import ProgressCircle from "./ProgressCircle";
import "@aws-amplify/ui-react/styles.css";
import UserPool from "../UserPool";
import { Button } from "@chakra-ui/react";
import {
  CognitoIdentityProviderClient,
  ListUsersCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import {
  CalendarEvent,
  UserCircle,
  Trophy,
  Edit,
  Power,
  Users,
  ClipboardCheck,
  PencilPlus,
} from "tabler-icons-react";
import { useEffect } from "react";

export default function MenuTool({ text, selected }) {
  const [bg, setBg] = useState("rgb(198, 213, 233)");
  const icons = {
    Profile: (
      <UserCircle
        size={26}
        strokeWidth={2}
        color={"black"}
        className={styles.toolIcon}
      />
    ),
    Admin: (
      <Edit
        size={26}
        strokeWidth={2}
        color={"black"}
        className={styles.toolIcon}
      />
    ),
    Classes: (
      <CalendarEvent
        size={26}
        strokeWidth={2}
        color={"black"}
        className={styles.toolIcon}
      />
    ),
    Leaderboard: (
      <Trophy
        size={26}
        strokeWidth={2}
        color={"black"}
        className={styles.toolIcon}
      />
    ),
    Leaderboard: (
      <Trophy
        size={26}
        strokeWidth={2}
        color={"black"}
        className={styles.toolIcon}
      />
    ),
    Leaderboard: (
      <Trophy
        size={26}
        strokeWidth={2}
        color={"black"}
        className={styles.toolIcon}
      />
    ),
    ManageClasses: (
      <PencilPlus
        size={26}
        strokeWidth={2}
        color={"black"}
        className={styles.toolIcon}
      />
    ),
    ManageUsers: (
      <Users
        size={26}
        strokeWidth={2}
        color={"black"}
        className={styles.toolIcon}
      />
    ),
    ManageAttendees: (
      <ClipboardCheck
        size={26}
        strokeWidth={2}
        color={"black"}
        className={styles.toolIcon}
      />
    ),
  };

  return (
    <div className={styles.tool}>
      {icons[text.replace(/\s+/g, "")]}
      {text == selected ? (
        <p className={styles.toolText} style={{ fontWeight: "700" }}>
          {text}
        </p>
      ) : (
        <p className={styles.toolText}>{text}</p>
      )}
    </div>
  );
}
