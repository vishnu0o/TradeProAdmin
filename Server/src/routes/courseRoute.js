import express from "express";
import { createCourseController, findCourseController } from "../controller/courseCreateController.js";
import upload from "../utils/multer.js";
const router = express.Router();

router.route("/createCourse").post(upload.single("preview"),createCourseController);
router.route("/findCourse").get(findCourseController);



export default router;
