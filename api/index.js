import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/database.js";
import routerUser from "../routes/userRoutes.js";
import routerPr from "../routes/practicalRoutes.js";
import routerSub from "../routes/subjectRoutes.js";


const app = express();

const PORT = 4000;
app.use(express.json());

app.use("/api/v1",routerUser);
app.use("/api/v1",routerPr);
app.use("/api/v1",routerSub);

dotenv.config();

dbConnect();


app.listen(PORT,()=>{
    console.log("Server is running at "+PORT);
})