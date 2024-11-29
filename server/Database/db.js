import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const URL = process.env.url;

const ConnectDb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("database connected successfully");
  } catch (err) {
    console.log("error occured:", err);
    process.exit(1);
  }
};
export default ConnectDb;
