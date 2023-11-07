import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

// imports
import User from "../models/userModel.js";

const createToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

export const signupUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const isCorrect = bcrypt.compareSync(password, user.password);
  if (!isCorrect) {
    res.status(404);
    throw new Error("Wrong username or password");
  }

  // create token
  const token = createToken(user._id);
  res.status(200).json({ email, token });
});

export const logoutUser = async (req, res) => {
  try {
    console.log("Logout");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
