import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// imports
import workoutRoutes from "./routes/workoutRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes

app.use("/api/workouts", workoutRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// DB
mongoose.set("runValidators", true); // to enable validators on update
mongoose.connect(MONGO_URI).then(
  app.listen(PORT, () => {
    console.log(`Server Port: ${PORT}`);
  })
);
