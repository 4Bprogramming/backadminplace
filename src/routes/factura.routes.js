import express from "express";
import {
  getFactura,
  getFacturaById,
  createFactura,
} from "../controllers/facturaController.js";

const router = express.Router();

router.get("/", getFactura );
router.get("/:id",getFacturaById );
router.post("/", createFactura);


export default router;