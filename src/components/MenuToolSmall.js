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

export default function MenuToolSmall({ text, selected }) {
  const [bg, setBg] = useState("rgb(198, 213, 233)");
  const icons = {
    ManageClasses: (
      <PencilPlus
        size={18}
        strokeWidth={2}
        color={"black"}
        className={styles.toolIcon}
      />
    ),
    ManageUsers: (
      <Users
        size={18}
        strokeWidth={2}
        color={"black"}
        className={styles.toolIcon}
      />
    ),
    ManageAttendees: (
      <ClipboardCheck
        size={18}
        strokeWidth={2}
        color={"black"}
        className={styles.toolIcon}
      />
    ),
  };

  return (
    <div className={styles.toolSmall}>
      {icons[text.replace(/\s+/g, "")]}
      {text == selected ? (
        <p className={styles.toolText} style={{ fontWeight: "700" }}>
          {text}
        </p>
      ) : (
        <p className={styles.toolTextSmall}>{text}</p>
      )}
    </div>
  );
}
