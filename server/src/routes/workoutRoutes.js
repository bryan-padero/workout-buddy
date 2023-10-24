import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
} from "../controllers/workoutControllers.js";

const router = express.Router();

router.get("/", getAllWorkouts);
router.get("/:workoutId", getSingleWorkout);
router.post("/", createWorkout);
router.patch("/:workoutId", updateWorkout);
router.delete("/:workoutId", deleteWorkout);

export default router;
