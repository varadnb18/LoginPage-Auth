import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  DOB: {
    type: Date,
    required: true, // Assuming DOB is required
  },

  Gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true, // Assuming Gender is required
  },

  heightAndWeight: {
    type: {
      height: {
        type: Number,
        required: true, // Assuming height is required
      },
      weight: {
        type: Number,
        required: true, // Assuming weight is required
      },
    },
    required: true, // Assuming heightAndWeight object is required
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
