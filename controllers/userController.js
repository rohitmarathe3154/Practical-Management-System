
import User from "../model/User.js"

export const createAdmin = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
   
    const user = new User({ name, email, password, role : "Admin"});
    const savedUser = await user.save();
    res.status(201).json({savedUser});
  } 
  catch (err) {
    res.status(500).json({ msg: "Server Error" });
    console.log(err);
  }
};

export const createTeacher = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
   
    const user = new User({ name, email, password, role : "Teacher"});
   const savedUser =  await user.save();
    res.status(201).json({savedUser});  
  }
   catch (err) {
    res.status(500).json({ msg: "Server Error" });
    console.log(err);
  }
};

export const createStudent = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = new User({ name, email, password, role : "Student"});
    const savedUser = await user.save();
    res.status(201).json({savedUser});
  } 
  catch (err) {
    res.status(500).json({ msg: "Server Error" });
    console.log(err);
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
    console.log(err);
  }
};

// Get all Admins
export const getAdmins = async (req, res) => {
  try {
    const admins = await UserModel.find({ role: "Admin" }); // Filter by role
    res.status(200).json(admins);
  } catch (err) {
    console.error("Error fetching admins:", err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// Get all Teachers
export const getTeachers = async (req, res) => {
  try {
    const teachers = await UserModel.find({ role: "Teacher" }); // Filter by role
    res.status(200).json(teachers);
  } catch (err) {
    console.error("Error fetching teachers:", err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// Get all Students
export const getStudents = async (req, res) => {
  try {
    const students = await UserModel.find({ role: "Student" }); // Filter by role
    res.status(200).json(students);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ msg: "Server Error" });
  }
};