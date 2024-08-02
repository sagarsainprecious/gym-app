import express from "express";
const router = express.Router();
import { adminSignIn } from "../controllers/adminController";

// User authentication routes
router.post("/admin/signIn", adminSignIn);

export default router;
