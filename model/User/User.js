const mongoose = require("mongoose");
//CREATE THE SCHEMA
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastname: {
    type: String,
    required: [true, "Last Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isCreator: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["Creator","eventee"],
  },
  
}, 
{
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
