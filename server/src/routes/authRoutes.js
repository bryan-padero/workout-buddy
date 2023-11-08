import express from "express";
import {
  signupUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/authControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
