// imports
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkouts } from "../hooks/useWorkouts";

function Home() {
  const { workouts, setWorkouts } = useWorkouts();

  const sortedWorkouts = workouts.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  async function handleDelete(workoutId) {
    const res = await axios.delete(
      `http://localhost:5000/api/workouts/${workoutId}`
    );
    const { data } = res;
    console.log(data);
    setWorkouts(workouts.filter((workout) => workout._id !== workoutId));
  }

  return (
    <div className="home">
      <div>
        {sortedWorkouts &&
          sortedWorkouts.map((workout) => (
            <WorkoutDetails
              key={workout._id}
              workout={workout}
              handleDelete={handleDelete}
            />
          ))}
      </div>
      <WorkoutForm setWorkouts={setWorkouts} workouts={workouts} />
    </div>
  );
}

export default Home;
