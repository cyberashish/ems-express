
// import { connectDB } from "./utils/client.ts";
import dotenv from "dotenv";

// import "./jobs/resetLeaves.ts";
// import "./config/googleStrategy.ts"

import express from "express";
// import { userRouter } from "./routes/user.routes.ts";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from 'cookie-parser';



const server = express();

dotenv.config({path:"./.env"});

const PORT = process.env.PORT || 8080;

// Middlewares
server.use(cors({
   origin: `${process.env.FRONTEND_HOST}`,  // Frontend URL
   credentials: true,  // Allows the sending of cookies
}));
server.use(express.json({limit:"16kb"}));
server.use(express.urlencoded({extended:true , limit:"16kb"}));
// Static middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);
// server.use(express.static(path.join(__dirname , "public")));
server.use(cookieParser());

// server.use("/" , userRouter);
// server.use("/employee" , employeeRouter);

server.get("/" , (req,res) => {
    res.json({title:"Om namo bhagwate vasudevaye namah!"})
})

server.listen(PORT,() => {
   console.log(`server started listening at http://localhost:${PORT}`)
})