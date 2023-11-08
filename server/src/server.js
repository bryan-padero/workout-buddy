import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// imports
import workoutRoutes from "./routes/workoutRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

// DB
connectDB();

// express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// error middleware
app.use(notFound);
app.use(errorHandler);

// app listen
app.listen(PORT, () => {
  console.log(`Server Port: ${PORT}`);
});
