import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"; // <---- importa cors

import employeeRoutes  from './routes/employees.routes.js';
import attendanceRoutes from "./routes/attendance.routes.js";
import departmentRoutes from "./routes/departments.routes.js";
import statisticsRoutes from "./routes/statistics.routes.js";
import facturaRoutes from "./routes/factura.routes.js";
import jobRoutes from "./routes/job.routes.js";
import userRoutes from "./routes/user.routes.js";
import photoRoutes from "./routes/photo.routes.js";

const app = express();

// Middleware generales
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// ✅ Habilita CORS
app.use(
  cors({
    // origin: "https://adminplace.vercel.app",
     origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
    credentials: true,
  })
);

// Rutas
app.use("/employees", employeeRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/departments", departmentRoutes);
app.use("/statistics", statisticsRoutes);
app.use("/factura", facturaRoutes);
app.use("/job", jobRoutes);
app.use("/user", userRoutes);
app.use("/photo", photoRoutes);

export default app;
