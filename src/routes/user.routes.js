import express from "express";
import {  createUser, getUser, getUserById,  loginUser} from "../controllers/userController.js";

const router = express.Router();

router.get("/",getUser );
router.post("/",createUser );
router.get("/:id",getUserById );
router.post("/login", loginUser);



export default router;