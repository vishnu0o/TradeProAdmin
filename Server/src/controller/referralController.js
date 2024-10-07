import asyncHandler from "express-async-handler";
import referalLevel from "../database/referalLevelMaster.js";

// @desc    referralLevel create
// @route   post /api/referral/createReferralLevel
// @access  user

export const referralLevelCreateController = asyncHandler(async (req, res) => {
  try {
    const { level, commision } = req.body;

    const createLevel = await referalLevel.create({
      Level: level,
      LevelCommission: commision
    });
    res
      .status(200)
      .json({ message: "referral level create successfully", status: true });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});

// @desc    referralLevel find
// @route   post /api/referral/findReferralLevel
// @access  user

export const referralLevelFindController = asyncHandler(async (req, res) => {
  try {
    const findLevel = await referalLevel.find({});
    res
      .status(200)
      .json({
        message: "referral level find successfully",
        status: true,
        data: findLevel
      });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});
