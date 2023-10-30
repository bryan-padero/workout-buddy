import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createWorkout } from "../slices/workoutSlice";

function WorkoutForm() {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    title: "",
    load: 0,
    reps: 0,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/workouts", {
      ...formValue,
    });
    const workout = await res.data;
    dispatch(createWorkout(workout));
    setFormValue({ title: "", load: 0, reps: 0 });
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
        required
      />
      <label htmlFor="title">Load(in kg): </label>
      <input
        id="load"
        type="number"
        name="load"
        value={formValue.load}
        onChange={handleChange}
        required
      />
      <label htmlFor="title">Reps: </label>
      <input
        id="reps"
        type="number"
        name="reps"
        value={formValue.reps}
        onChange={handleChange}
        required
      />
      <button>Add Workout</button>
    </form>
  );
}

export default WorkoutForm;
