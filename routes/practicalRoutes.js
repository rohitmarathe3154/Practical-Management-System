import express from "express";
import { authenticateToken, authorizeRoles } from "../middleWare/MiddleWare.js";
import { createPractical, getPracticals, enrollInPractical } from "../controllers/practicalController.js";

const routerPr = express.Router()

routerPr.post("/practicals/create",authenticateToken, authorizeRoles("Teacher"),createPractical);
routerPr.post("/practicals/enroll",enrollInPractical);

routerPr.get("/practicals/get",getPracticals);

export default routerPr;