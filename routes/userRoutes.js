import express from "express";
import { createAdmin, createStudent, createTeacher, getAllUsers, getAdmins, getStudents,getTeachers } from "../controllers/userController.js";
import { authenticateToken,authorizeRoles } from "../middleWare/MiddleWare.js";

const routerUser = express.Router()

routerUser.post("/admin/create",authenticateToken, authorizeRoles("Admin"),createAdmin);
routerUser.post("/teacher/create",createTeacher);
routerUser.post("/student/create",createStudent);

routerUser.get("/user/get",authenticateToken, authorizeRoles("Admin"),getAllUsers);
routerUser.get("/admins/get",authenticateToken, authorizeRoles("Admin"),getAdmins);
routerUser.get("/teachers/get",authenticateToken, authorizeRoles("Admin"),getTeachers);
routerUser.get("/students/get",authenticateToken, authorizeRoles("Admin"),getStudents);

export default routerUser;