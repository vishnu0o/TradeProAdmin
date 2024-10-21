import express from "express";
import {
    createCourseChapterController,
  createCourseController,
  createCourseLessonController,
  CreateQuizController,
  deleteCourseChapterController,
  deleteCourseLessonController,
  deleteQuizController,
  editCourseController,
  findCourseController,
  findOneCourseController,
  findOneCourselanguageController,
  updateCourseChapterController,
  updateCourseLessonController
} from "../controller/courseCreateController.js";
import upload from "../utils/multer.js";
const router = express.Router();

router
  .route("/createCourse")
  .post(upload.single("preview"),createCourseController);
router.route("/findCourse").get(findCourseController);
router.route("/findOneCourselanguage").get(findOneCourselanguageController);
router.route("/findOneCourse").get(findOneCourseController);
router
  .route("/editCourse")
  .put(upload.single("preview"), editCourseController);


router.route("/createLesson").post(createCourseLessonController);
router.route("/updateLesson").put(updateCourseLessonController);
router.route("/deleteLesson").delete(deleteCourseLessonController);


router.route("/createChapter").post(upload.single("chapter"),createCourseChapterController);
router.route("/updateChapter").put(upload.single("updatedVideo"),updateCourseChapterController);
router.route("/deleteChapter").delete(deleteCourseChapterController);


router.route("/CreateQuiz").post(CreateQuizController);
router.route("/DeleteQuiz").delete(deleteQuizController);









export default router;
