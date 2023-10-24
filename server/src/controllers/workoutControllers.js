import Workout from "../models/workoutModel.js";

export const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({});
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const getSingleWorkout = async (req, res) => {
  const { workoutId } = req.params;

  try {
    const workout = await Workout.findById(workoutId);
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const updateWorkout = async (req, res) => {
  const { workoutId } = req.params;
  try {
    const workout = await Workout.findByIdAndUpdate(
      workoutId,

      {
        ...req.body,
      },
      { new: true }
    );
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const deleteWorkout = async (req, res) => {
  const { workoutId } = req.params;

  try {
    const workout = await Workout.findByIdAndDelete(workoutId);
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
