import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateWorkout } from "../slices/workoutSlice";

function Drawer({ workout, handleToggle }) {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    title: workout.title,
    load: workout.load,
    reps: workout.reps,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.patch(
      `http://localhost:5000/api/workouts/${workout._id}`,
      {
        ...formValue,
      }
    );
    const data = await res.data;
    if (res.statusText === "OK") dispatch(updateWorkout(data));
    handleToggle();
  }

  function handleChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit} className="drawer">
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
      <button>Update Workout</button>
    </form>
  );
}

export default Drawer;
