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
    // required: true,
  },

  Gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    // required: true,
  },

  heightAndWeight: {
    type: {
      height: {
        type: Number,
        // required: true,
      },
      weight: {
        type: Number,
        // required: true,
      },
    },
    // required: true,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
