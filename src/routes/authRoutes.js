import { Router } from "express";
import { loginStaff } from "../controllers/authController.js";

const router = Router();

// POST /api/auth/login
router.post("/login", loginStaff);

export default router;