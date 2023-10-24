import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// imports
import workoutRoutes from "./routes/workoutRoutes.js";

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes

app.use("/api/workouts", workoutRoutes);

// DB
mongoose.connect(MONGO_URI).then(
  app.listen(PORT, () => {
    console.log(`Server Port: ${PORT}`);
  })
);
