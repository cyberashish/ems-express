import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/user.routes";
import { employeeRouter } from "./routes/employee.routes";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_HOST || "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// Static middleware (optional)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", userRouter);
app.use("/employee", employeeRouter);

// Simple route for health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running fine 🚀" });
});

// ✅ Only listen when running locally (not in Vercel)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`✅ Server started locally at http://localhost:${PORT}`);
  });
}

// ✅ Export the app for Vercel
export default app;
