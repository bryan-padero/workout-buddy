import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createWorkout } from "../slices/workoutSlice";

function WorkoutForm() {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    title: "",
    load: "",
    reps: "",
  });
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/workouts", {
        ...formValue,
      });
      const workout = await res.data;
      dispatch(createWorkout(workout));
      setFormValue({ title: "", load: 0, reps: 0 });
      setError(null);
    } catch (error) {
      setError(error.response.data.error);
    }
  }

  function handleChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input
        id="title"
        type="text"
        name="title"
        value={formValue.title}
        onChange={handleChange}
      />
      <label htmlFor="title">Load(in kg): </label>
      <input
        id="load"
        type="number"
        name="load"
        value={formValue.load}
        onChange={handleChange}
      />
      <label htmlFor="title">Reps: </label>
      <input
        id="reps"
        type="number"
        name="reps"
        value={formValue.reps}
        onChange={handleChange}
      />
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
