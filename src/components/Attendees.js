import { Button } from "@chakra-ui/react";
import { API } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Admin.module.css";
import RemoveUser from "../components/RemoveUser";
import { useDispatch, useSelector } from "react-redux";
import { setToRemove, deselect, clear } from "../features/class/removeStaging";
// import { removeAttendees } from "../features/class/detailsSlice";
import * as mutations from "../graphql/mutations";
import { connect } from "react-redux";

function Attendees({ setToggle }, enrolled) {
  let detailsState = useSelector((state) => state.details.value);
  const removeStaging = useSelector((state) => state.removeStaging.value);
  const dispatch = useDispatch();

  enrolled = detailsState;

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

      dispatch(clear());
      setToggle((prevState) => !prevState);
      // dispatch(removeAttendees(removeStaging));
    });
  }

  return (
    <div className={styles.attendeesContainer}>
      <div className={styles.detailsHeaders}>
        <p className={styles.attendeesHeader}>Attendees</p>
        <Button
          colorScheme="red"
          size="sm"
          style={{ marginLeft: "50px" }}
          onClick={removeStagedUsers}
        >
          Confirm Removals
        </Button>
      </div>
      <div className={styles.contain}>
        <div className={styles.attendees}>
          {enrolled.attendees.map((attendee) => (
            <RemoveUser key={uuidv4()} attendee={attendee} />
          ))}
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
