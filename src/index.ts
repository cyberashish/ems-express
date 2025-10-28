import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.routes.js";
import { employeeRouter } from "./routes/employee.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_HOST || "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (_, res) => {
  res.json({ message: "🚀 Express API working on Vercel!" });
});

app.use("/users", userRouter);
app.use("/employee", employeeRouter);

// ❌ Do NOT use app.listen() on Vercel
export default app;
