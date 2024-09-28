import express from "express";
import dotenv from "dotenv";
import dbconnection from "./config/dbConctions.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();


dotenv.config({ path: "./config/.env" });
 dbconnection();
 app.use(cors({
     origin: ' http://localhost:5173/', // Replace with the URL of your frontend
     methods: 'GET,POST,PUT,DELETE', // Allowed methods
    credentials: true // Enable this if you want to allow cookies/auth
   }));

   app.use(cookieParser());
const port = 3000;
app.listen(port, () => console.log("server is up  3000"));
