import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWorkouts } from "../slices/workoutSlice";

export const useWorkouts = () => {
  const { workouts } = useSelector((state) => state.workout);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await axios.get("http://localhost:5000/api/workouts");
      const { data } = res;
      if (res.statusText === "OK") dispatch(setWorkouts(data));
    };
    fetchWorkouts();
  }, [dispatch]);
  return { workouts };
};
