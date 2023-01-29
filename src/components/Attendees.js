import { Button } from "@chakra-ui/react";
import { API } from "aws-amplify";
import { connect, useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Admin.module.css";
import RemoveUser from "../components/RemoveUser";
import { removeFromDetails } from "../features/class/detailsSlice";
import { clearStaging } from "../features/class/removeStaging";
import { addSelect, clearSelect } from "../features/class/selectedSlice";
import * as mutations from "../graphql/mutations";

function Attendees({ enrolled }) {
  const removeStaging = useSelector((state) => state.removeStaging.value);
  const selectState = useSelector((state) => state.selected.value);
  const detailsState = useSelector((state) => state.details.value);
  const dispatch = useDispatch();

  function removeStagedUsers() {
    removeStaging.forEach(async (id) => {
      const userToDelete = await API.graphql({
        query: mutations.deleteAttendee,
        variables: {
          input: {
            id: id,
          },
        },
      });
    });

    dispatch(clearStaging());
    dispatch(clearSelect());
    dispatch(addSelect(selectState));
    dispatch(removeFromDetails(removeStaging));
  }

  return (
    <div className={styles.attendeesContainer}>
      <div className={styles.detailsHeaders}>
        <p className={styles.attendeesHeader}>Attendees</p>
        {removeStaging.length > 0 && (
          <Button
            colorScheme="red"
            size="sm"
            style={{ marginLeft: "50px" }}
            onClick={removeStagedUsers}
          >
            Confirm Removals
          </Button>
        )}
      </div>
      <div className={styles.contain}>
        <div className={styles.attendees}>
          {enrolled.id !== "" && detailsState.attendees.length > 0 ? (
            enrolled.attendees.map((attendee) => (
              <RemoveUser key={uuidv4()} attendee={attendee} />
            ))
          ) : (
            <p>There are no attendees.</p>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    enrolled: state.details.value,
  };
};

export default connect(mapStateToProps)(Attendees);
