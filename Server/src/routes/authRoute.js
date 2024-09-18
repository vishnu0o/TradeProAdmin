import express from "express";
import {
  loginController,
} from "../controller/authController.js";

const router = express.Router();

router.route("/login").post(loginController);

export default router;
