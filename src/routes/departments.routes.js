import express from "express";
import { getDepartmentsWithEmployees, createDepartment } from "../controllers/departmentController.js";

const router = express.Router();

router.get("/employees", getDepartmentsWithEmployees);
router.post("/", createDepartment);


export default router;