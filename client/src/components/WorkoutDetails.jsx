import axios from "axios";
import { Edit, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../slices/workoutSlice";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Drawer from "./Drawer";

function WorkoutDetails({ workout }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();

  async function handleDelete(workoutId) {
    const res = await axios.delete(
      `http://localhost:5000/api/workouts/${workoutId}`
    );
    const { data } = res;
    console.log(data);
    dispatch(deleteWorkout(workoutId));
  }

  function handleToggle() {
    setOpenDrawer(!openDrawer);
  }

  return (
    <div className="workout-details">
      <div>
        <h4>{workout.title}</h4>
        <p>Load(kg): {workout.load}</p>
        <p>Reps: {workout.reps}</p>
        <p>
          {formatDistanceToNow(new Date(workout.updatedAt), {
            addSuffix: true,
          })}
        </p>
        <span
          className="delete-button"
          onClick={() => handleDelete(workout._id)}
        >
          <Trash />
        </span>
        <span className="edit-button" onClick={() => handleToggle(workout._id)}>
          <Edit />
        </span>
      </div>
      {openDrawer ? (
        <Drawer workout={workout} handleToggle={handleToggle} />
      ) : null}
    </div>
  );
}

export default WorkoutDetails;
