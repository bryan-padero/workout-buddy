import { Trash } from "lucide-react";

function WorkoutDetails({ workout, handleDelete }) {
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
