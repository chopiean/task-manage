import { Router } from "express";
import {
  register,
  login,
  getMe,
  registerValidation,
  loginValidation,
} from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";
import { validate } from "../middleware/validator.js";
import { authLimiter } from "../middleware/rateLimiter.js";

const router = Router();
router.use(authLimiter);

router.post("/register", validate(registerValidation), register);
router.post("/login", validate(loginValidation), login);
router.get("/me", protect, getMe);

export default router;
