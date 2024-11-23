
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true
 },
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  password: { 
    type: String, 
    required: true 
},
  role: { type: String, 
    enum: ["Admin", "Teacher", "Student"], 
    required: true
 },
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;
