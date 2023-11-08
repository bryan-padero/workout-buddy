import express from "express";

// imports
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAllUsers);
router.get("/:userId", protect, getSingleUser);
router.post("/", protect, createUser);
router.patch("/:userId", protect, updateUser);
router.delete("/:userId", protect, deleteUser);

export default router;
