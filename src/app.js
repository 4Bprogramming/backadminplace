import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import employeeRoutes  from './routes/employees.routes.js';
import attendanceRoutes from "./routes/attendance.routes.js";
import departmentRoutes from "./routes/departments.routes.js";
import statisticsRoutes from "./routes/statistics.routes.js";
import facturaRoutes from "./routes/factura.routes.js";
import jobRoutes from "./routes/job.routes.js";
import userRoutes from "./routes/user.routes.js";


const app = express();

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
  next();
});

app.use("/employees",employeeRoutes)
app.use("/attendance", attendanceRoutes);
app.use("/departments", departmentRoutes);
app.use("/statistics", statisticsRoutes);
app.use("/factura", facturaRoutes);
app.use("/job", jobRoutes);
app.use("/user", userRoutes);


export default app;
