import bcrypt from "bcrypt";

// imports
import User from "../models/userModel.js";

const saltRounds = 10;

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const getSingleUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  try {
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      userId,

      {
        ...req.body,
      },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
