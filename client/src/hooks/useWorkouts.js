import axios from "axios";
import { useEffect, useState } from "react";

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await axios.get("http://localhost:5000/api/workouts");
      const { data } = res;
      setWorkouts(data);
    };
    fetchWorkouts();
  }, []);

  return { workouts, setWorkouts };
};
