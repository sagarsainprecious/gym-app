import express from "express";
import { signIn, signUp } from "../controllers/userController.js";
import { roleAuthorize } from "../middlewares/roleAuthorize.js";
import { verifyToken } from "../middlewares/varifyToken.js";
import { validateUpdateRequestBody } from "../middlewares/validateRequestBody.js";
const router = express.Router();

// User authentication routes
router.post("/api/v1/auth/signUp", signUp);
router.post("/api/v1/auth/signIn", signIn);

export default router;
