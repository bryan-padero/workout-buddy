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
    updateWorkout: (state, action) => {
      state.workouts = state.workouts.map((workout) =>
        workout._id === action.payload._id
          ? {
              ...workout,
              title: action.payload.title,
              load: action.payload.load,
              reps: action.payload.reps,
            }
          : workout
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWorkouts, createWorkout, deleteWorkout, updateWorkout } =
  workoutSlice.actions;

export default workoutSlice.reducer;

export const getWorkouts = (state) => state.workout.workouts;
