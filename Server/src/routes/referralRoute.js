import express from "express";
import upload from "../utils/multer.js";
import {
  referralLevelCreateController,
  referralLevelFindController
} from "../controller/referralController.js";
const router = express.Router();

router.route("/createReferralLevel").post(referralLevelCreateController);
router.route("/findReferralLevel").get(referralLevelFindController);

export default router;
