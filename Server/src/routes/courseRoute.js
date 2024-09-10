import express from "express";
import {
    createCourseChapterController,
  createCourseController,
  createCourseLessonController,
  editCourseController,
  findCourseController,
  findOneCourseController
} from "../controller/courseCreateController.js";
import upload from "../utils/multer.js";
const router = express.Router();

router
  .route("/createCourse")
  .post(upload.single("preview"), createCourseController);
router.route("/findCourse").get(findCourseController);
router.route("/findOneCourse").get(findOneCourseController);
router
  .route("/editCourse")
  .put(upload.single("preview"), editCourseController);

router.route("/createLesson").post(createCourseLessonController);
router.route("/createChapter").post(upload.single("chapter"),createCourseChapterController);



export default router;
