import mongoose from "mongoose";
import pkg from "validator";
import bcrypt from "bcrypt";

const { isEmail } = pkg;
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail, "Invalid Email"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hashSync(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
