import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import registratedUser from "../database/registratedUser.js";
import generateToken from "../utils/generateToken.js";

// @desc    Login
// @route   post /api/auth/login
// @access  user

export const loginController = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await registratedUser.findOne({
      email: email
    });
    if (isUserExist) {
      if (isUserExist.isAdmin) {
        bcrypt
          .compare(password, isUserExist.password)
          .then((isMatch) => {
            if (isMatch) {
              let token = generateToken(isUserExist._id);
              res.status(201).json({
                token,
                name: isUserExist.email,
                UserId: isUserExist._id,
                message: "Login successfully"
              });
            } else {
              res
                .status(400)
                .json({ message: "Password is incorrect", status: false });
            }
          })
          .catch((err) => {
            res.status(500).send("Error occurred while comparing passwords");
          });
      } else {
        res.status(400).json({
          message: "User not exist"
        });
      }
    } else {
      res.status(400).json({
        message: "User not exist"
      });
    }
  } catch (error) {
    console.log(error, "errorr");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});
