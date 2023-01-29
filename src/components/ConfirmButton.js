import "@aws-amplify/ui-react/styles.css";
import { Button } from "@chakra-ui/react";
import { API } from "aws-amplify";
import { connect, useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";
import {
  addConfirmed,
  removeConfirmed,
} from "../features/class/confirmedSlice";
import { clearDetails } from "../features/class/detailsSlice";
import { clearSelect } from "../features/class/selectedSlice";
import * as mutations from "../graphql/mutations";

function ConfirmButton({ selects }) {
  const userState = useSelector((state) => state.user.value);
  // console.log(userState);
  const confirmedState = useSelector((state) => state.confirmed.value);
  const dispatch = useDispatch();

  async function makeChanges() {
    selects.forEach(async (id) => {
      if (!confirmedState.includes(id)) {
        const updateUser = await API.graphql({
          query: mutations.createAttendee,
          variables: {
            input: {
              id: id + "-" + userState.username,
              firstName: userState.firstName,
              lastName: userState.lastName,
              llbelt: userState.llbelt,
              jjbelt: userState.jjbelt,
              username: userState.username,
              classAttendeesId: id,
            },
          },
        });
        dispatch(addConfirmed(id));
      } else {
        console.log("deleting attendee", id + "-" + userState.username);
        const updateUser = await API.graphql({
          query: mutations.deleteAttendee,
          variables: {
            input: {
              id: id + "-" + userState.username,
            },
          },
        });
        dispatch(removeConfirmed(id));
      }
    });
    dispatch(clearSelect());
    dispatch(clearDetails());
  }

  return (
    <div>
      {selects.length !== 0 && (
        <Button
          colorScheme="red"
          size="sm"
          className={styles.confirm}
          height="36px"
          fontSize="11pt"
          onClick={makeChanges}
        >
          Confirm Changes
        </Button>
      )}
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    selects: state.selected.value,
  };
};

export default connect(mapStateToProps)(ConfirmButton);
