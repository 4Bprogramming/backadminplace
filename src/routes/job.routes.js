import express from "express";
import { getJob, createJob } from "../controllers/jobController.js";

const router = express.Router();

router.get("/", getJob);
router.post("/", createJob);


export default router;