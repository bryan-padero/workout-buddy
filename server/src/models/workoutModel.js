import mongoose from "mongoose";
const { Schema } = mongoose;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
      min: 1,
    },
    load: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Workout", workoutSchema);
