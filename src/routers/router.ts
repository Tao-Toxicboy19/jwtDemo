import express from "express";
import { RegisterController } from "../controllers/RegisterController";
import { LoginController } from "../controllers/LoginController";
import { AuthController } from "../controllers/AuthController";

const router = express.Router();

router.post("/register",RegisterController);
router.post("/login",LoginController );
router.post("/welcome",AuthController );

export default router;
