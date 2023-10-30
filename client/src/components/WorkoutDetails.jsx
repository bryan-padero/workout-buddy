import axios from "axios";
import { Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../slices/workoutSlice";

function WorkoutDetails({ workout }) {
  const dispatch = useDispatch();

  async function handleDelete(workoutId) {
    const res = await axios.delete(
      `http://localhost:5000/api/workouts/${workoutId}`
    );
    const { data } = res;
    console.log(data);
    dispatch(deleteWorkout(workoutId));
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>Load(kg): {workout.load}</p>
      <p>Reps: {workout.reps}</p>
      <p>{workout.createdAt}</p>
      <span onClick={() => handleDelete(workout._id)}>
        <Trash />
      </span>
    </div>
  );
}

export default WorkoutDetails;
