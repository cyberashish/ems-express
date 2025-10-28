import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
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

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes
app.use("/", userRouter);
app.use("/employee", employeeRouter);

app.get("/health", (_, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Export for Vercel
export default app;
