import User from "../Models/User-Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const LoginAPI = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      // Generate JWT token
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.secretkey, // Replace with an environment variable
        { expiresIn: "1h" } // Token expiration time
      );

      return res.status(200).json({ msg: "Login Successful", token });
    } else {
      return res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const RegisterAPI = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const UserExist = await User.findOne({ email });
    if (UserExist) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hash_password = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hash_password,
    });

    return res.status(201).json({
      msg: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error during registration:", error);

    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

export const getAllUsersAPI = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }

    return res.status(200).json({
      msg: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};
