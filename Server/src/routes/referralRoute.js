import express from "express";

import upload from "../utils/multer.js";
import { referralLevelCreateController } from "../controller/referralController.js";
const router = express.Router();

router.route("/createReferralLevel").post(referralLevelCreateController);

export default router;
