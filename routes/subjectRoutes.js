import express from "express";
import { authenticateToken, authorizeRoles } from "../middleWare/MiddleWare.js";
import { createSubject, getSubjects } from "../controllers/subjectController.js";
const routerSub = express.Router()

routerSub.post("/subject/create",authenticateToken, authorizeRoles("Admin"),createSubject);

routerSub.get("/subjects/get",getSubjects);

export default routerSub;