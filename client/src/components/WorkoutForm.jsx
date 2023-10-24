import { useState } from "react";
import axios from "axios";

function WorkoutForm({ setWorkouts, workouts }) {
  const [formValue, setFormValue] = useState({
    title: "",
    load: 0,
    reps: 0,
  });

  function handleChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/workouts", {
      ...formValue,
    });
    const workout = await res.data;
    setWorkouts([...workouts, workout]);
    setFormValue({ title: "", load: 0, reps: 0 });
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
