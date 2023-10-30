import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
};

export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    setWorkouts: (state, action) => {
      state.workouts = action.payload;
    },
    createWorkout: (state, action) => {
      state.workouts = [action.payload, ...state.workouts];
    },
    deleteWorkout: (state, action) => {
      state.workouts = state.workouts.filter(
        (workout) => workout._id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWorkouts, createWorkout, deleteWorkout } =
  workoutSlice.actions;

export default workoutSlice.reducer;

export const getWorkouts = (state) => state.workout.workouts;
