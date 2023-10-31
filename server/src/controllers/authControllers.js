import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// imports
import User from "../models/userModel.js";

const saltRounds = 10;

const createToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  try {
    const user = await User.create({ name, email, password: hashedPassword });

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).send({ error: "User not found" });
  }
  const isCorrect = bcrypt.compareSync(password, user.password);
  if (!isCorrect) {
    res.status(404).send({ error: "Wrong Username or Password" });
  }

  // create token
  const token = createToken(user._id);
  res.status(200).json({ email, token });
};

export const logout = async (req, res) => {
  try {
    console.log("Logout");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
