import "@aws-amplify/ui-react/styles.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipboardCheck, PencilPlus, Users } from "tabler-icons-react";
import styles from "../../styles/Menu.module.css";
import { setManage } from "../features/class/adminSlice";

export default function MenuToolSmall({ text }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [bg, setBg] = useState("rgb(198, 213, 233)");
  const adminState = useSelector((state) => state.admin.value);
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
    <div
      className={styles.toolSmall}
      onClick={() => {
        if (router.pathname != "/admin") {
          router.push("/admin");
        }
        dispatch(setManage(text));
      }}
    >
      {icons[text.replace(/\s+/g, "")]}
      {text == adminState ? (
        <p
          className={styles.toolText}
          style={{ fontWeight: "700", fontSize: "9pt" }}
        >
          {text}
        </p>
      ) : (
        <p className={styles.toolTextSmall}>{text}</p>
      )}
    </div>
  );
}
