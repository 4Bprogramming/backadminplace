import express from "express";
import {
  getAttendance,
  getAttendanceByDate,
  updateAttendanceByDate,
  create,
  updateAttendance
} from "../controllers/attendanceController.js";

const router = express.Router();

router.get("/", getAttendance);
router.post("/", create )
router.patch("/:id", updateAttendance);
router.get("/employees/:date", getAttendanceByDate);
router.patch("/employees/:date", updateAttendanceByDate);

export default router;