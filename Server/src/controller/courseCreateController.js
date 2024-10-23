import asyncHandler from "express-async-handler";
import Courses from "../database/Course.js";
import { uploadFileToS3 } from "../utils/S3Upload.js";
import fs from "fs";
import Lesson from "../database/courseLesson.js";
import Chapter from "../database/courseChapter.js";

// @desc    Course create
// @route   post /api/course/createCourse
// @access  user

export const createCourseController = asyncHandler(async (req, res) => {
  try {
    const formData = req.body;
    const previewFile = req.files["preview"] ? req.files["preview"][0] : null;
    const thumbnailFile = req.files["thumbnail"]
      ? req.files["thumbnail"][0]
      : null;

    // Handle the files as needed
    console.log(formData, "formdataaaaaaaaaaaaaaaaaaaaaaaaa");

    let uploadedVideoUrl;
    let uploadedImageUrl;

    if (previewFile) {
      const fileData = fs.readFileSync(previewFile.path);
      const fileName = `TradeProCourseVideo${previewFile.filename}`;
      const folderName = "PreviewVideo";
      const contentType = previewFile.mimetype;
      uploadedVideoUrl = await uploadFileToS3(
        fileData,
        fileName,
        folderName,
        contentType
      );

      // Remove the file from the local filesystem after successful upload
      fs.unlink(previewFile.path, (err) => {
        if (err) {
          console.error("Error deleting the file from local storage:", err);
        } else {
          console.log("File deleted from local storage successfully");
        }
      });
    }
    if (thumbnailFile) {
      const fileData = fs.readFileSync(thumbnailFile.path);
      const fileName = `TradeProCourseImage${thumbnailFile.filename}`;
      const folderName = "PreviewImage";
      const contentType = thumbnailFile.mimetype;
      uploadedImageUrl = await uploadFileToS3(
        fileData,
        fileName,
        folderName,
        contentType
      );

      // Remove the file from the local filesystem after successful upload
      fs.unlink(thumbnailFile.path, (err) => {
        if (err) {
          console.error("Error deleting the file from local storage:", err);
        } else {
          console.log("File deleted from local storage successfully");
        }
      });
    }
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    const createCourse = await Courses.create({
      previewVideo: uploadedVideoUrl,
      thumbnailImage: uploadedImageUrl,
      title: formData?.title,
      author: formData?.author,
      price: formData?.price,
      description: formData?.description,
      courseType: formData?.courseType,
      publishedYear: formattedDate,
      courseDuration: formData?.courseDuration,
      language: formData?.language.split(","),
      rating: 0
    });
    res
      .status(200)
      .json({ messgae: "CourseCreate successfully", status: true });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});

// @desc    Course Find
// @route   post /api/course/findCourse
// @access  user

export const findCourseController = asyncHandler(async (req, res) => {
  try {
    const findCourse = await Courses.find({});
    res
      .status(200)
      .json({ message: "course find successfully", data: findCourse });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});

// @desc    Course title findOne
// @route   post /api/course/findOneCourselanguage
// @access  user

export const findOneCourselanguageController = asyncHandler(
  async (req, res) => {
    try {
      const { id } = req.query;
      const findCourse = await Courses.findOne({ _id: id });
      res.status(200).json({
        message: "course language find successfully",
        data: findCourse
      });
    } catch (error) {
      console.log(error, "error");
      res.status(500).json({ message: "Something went wrong", data: error });
    }
  }
);

// @desc    Course FindOne
// @route   post /api/course/findOneCourse
// @access  user

export const findOneCourseController = asyncHandler(async (req, res) => {
  try {
    const { id } = req.query;
    const findCourse = await Lesson.find({ courseId: id })
      .populate("courseId")
      .populate("chapters")
      .exec();
    res
      .status(200)
      .json({ message: "course find successfully", data: findCourse });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});

// @desc    Course Edit
// @route   post /api/course/editCourse
// @access  user

export const editCourseController = asyncHandler(async (req, res) => {
  try {
    const formData = req.body;
    const previewFile = req.files["preview"] ? req.files["preview"][0] : null;
    const thumbnailFile = req.files["thumbnail"]
      ? req.files["thumbnail"][0]
      : null;
    console.log(formData, "BODYYYYYYYYYYYY");
    let uploadedVideoUrl;
    let uploadedImageUrl;
    if (previewFile) {
      const fileData = fs.readFileSync(previewFile.path);
      const fileName = `TradeProCourseVideo${previewFile.filename}`;
      const folderName = "PreviewVideo";
      const contentType = previewFile.mimetype;
      uploadedVideoUrl = await uploadFileToS3(
        fileData,
        fileName,
        folderName,
        contentType
      );

      // Remove the file from the local filesystem after successful upload
      fs.unlink(previewFile.path, (err) => {
        if (err) {
          console.error("Error deleting the file from local storage:", err);
        } else {
          console.log("File deleted from local storage successfully");
        }
      });
    }

    if (thumbnailFile) {
      const fileData = fs.readFileSync(thumbnailFile.path);
      const fileName = `TradeProCourseVideo${thumbnailFile.filename}`;
      const folderName = "PreviewVideo";
      const contentType = thumbnailFile.mimetype;
      uploadedImageUrl = await uploadFileToS3(
        fileData,
        fileName,
        folderName,
        contentType
      );

      // Remove the file from the local filesystem after successful upload
      fs.unlink(thumbnailFile.path, (err) => {
        if (err) {
          console.error("Error deleting the file from local storage:", err);
        } else {
          console.log("File deleted from local storage successfully");
        }
      });
    }

    const updateCourse = await Courses.updateOne(
      { _id: formData?.id },
      {
        $set: {
          previewVideo: uploadedVideoUrl
            ? uploadedVideoUrl
            : formData?.previewVideo,
          thumbnailImage: uploadedImageUrl
            ? uploadedImageUrl
            : formData?.previewImage,
          title: formData?.title,
          author: formData?.author,
          description: formData?.description,
          courseType: formData?.courseType,
          publishedYear: formData?.publishedYear,
          courseDuration: formData?.courseDuration,
          language: formData?.language.split(",")
        }
      }
    );
    res.status(200).json({ message: "updated successfully", status: true });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});

// @desc    Course Lesson create
// @route   post /api/course/createLesson
// @access  user

export const createCourseLessonController = asyncHandler(async (req, res) => {
  try {
    const { selectedLanguage, lesson, id } = req.body;

    const course = await Courses.findOne({ _id: id });
    const createLesson = await Lesson.create({
      courseId: id,
      lessonLanguage: selectedLanguage,
      lessonName: lesson
    });

    course?.lessons?.push(createLesson?._id);
    await course.save();
    res
      .status(200)
      .json({ message: "Lesson created successfully", status: true });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});

// @desc    Course Lesson update
// @route   PUT /api/course/updateLesson
// @access  user

export const updateCourseLessonController = asyncHandler(async (req, res) => {
  try {
    const { lesson, lessonId } = req.body;

    const updateLesson = await Lesson.updateOne(
      { _id: lessonId },
      {
        $set: {
          lessonName: lesson
        }
      }
    );
    res
      .status(200)
      .json({ message: "Lesson updated successfully", status: true });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});

// @desc    Course Lesson Delete
// @route   post /api/course/deleteLesson
// @access  user

export const deleteCourseLessonController = asyncHandler(async (req, res) => {
  try {
    const { lessonId } = req.query;

    const updateCourse = await Lesson.deleteOne({ _id: lessonId });

    if (updateCourse.nModified === 0) {
      return res.status(404).json({
        message: "Lesson not found or already deleted",
        status: false
      });
    }
    res
      .status(200)
      .json({ message: "Lesson deleted successfully", status: true });
  } catch (error) {
    console.error(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});

// @desc    Course Chapter create
// @route   post /api/course/createChapter
// @access  user

export const createCourseChapterController = asyncHandler(async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData, "formDataaaaaaaaaaaaaaaaaaaa");
    let uploadedVideoUrl;
    if (req.file) {
      const fileData = fs.readFileSync(req.file.path);
      const fileName = `TradeProCourseChapterVideo${req.file.filename}`;
      const folderName = "ChapterVideo";
      const contentType = req.file.mimetype;
      uploadedVideoUrl = await uploadFileToS3(
        fileData,
        fileName,
        folderName,
        contentType
      );

      // Remove the file from the local filesystem after successful upload
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.error("Error deleting the file from local storage:", err);
        } else {
          console.log("File deleted from local storage successfully");
        }
      });
    }
    const lesson = await Lesson.findOne({ _id: formData?.lessonId });
    const createChapter = await Chapter.create({
      lessonId: formData?.lessonId,
      title: formData?.chapterTitle,
      video: uploadedVideoUrl
    });
    lesson?.chapters?.push(createChapter?._id);
    await lesson.save();

    res
      .status(200)
      .json({ message: "Chapter created successfully", status: true });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});

// @desc    Course Chapter update
// @route   post /api/course/updateChapter
// @access  user

export const updateCourseChapterController = asyncHandler(async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData, "formDataaaaaaaaaaaaaaaaaaaa");
    let uploadedVideoUrl;
    if (req.file) {
      const fileData = fs.readFileSync(req.file.path);
      const fileName = `TradeProCourseChapterVideo${req.file.filename}`;
      const folderName = "ChapterVideo";
      const contentType = req.file.mimetype;
      uploadedVideoUrl = await uploadFileToS3(
        fileData,
        fileName,
        folderName,
        contentType
      );

      // Remove the file from the local filesystem after successful upload
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.error("Error deleting the file from local storage:", err);
        } else {
          console.log("File deleted from local storage successfully");
        }
      });
    }
    const updateLesson = await Chapter.updateOne(
      {
        _id: formData?.chapterId
      },
      {
        $set: {
          title: formData?.updatedChapter,
          video: uploadedVideoUrl ? uploadedVideoUrl : formData?.updatedVideo
        }
      }
    );
    res
      .status(200)
      .json({ message: "Chapter updated successfully", status: true });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});

// @desc    Course Chapter Delete
// @route   post /api/course/deleteChapter
// @access  user

export const deleteCourseChapterController = asyncHandler(async (req, res) => {
  try {
    const { chapterId } = req.query;
    const updateCourse = await Chapter.deleteOne({
      _id: chapterId
    });
    res
      .status(200)
      .json({ message: "Chapter Deleted successfully", status: true });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});

// @desc    Course Quiz Create
// @route   post /api/course/CreateQuiz
// @access  user

export const CreateQuizController = asyncHandler(async (req, res) => {
  try {
    let { lessonId, question, options, answer } = req.body;
    console.log(req.body, "bodyyyyyyyyyyyyyyyyyy");

    options = options.map((value) => value.option);

    const createQuiz = await Lesson.findOne({ _id: lessonId });

    if (!createQuiz) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    const newQuiz = {
      question,
      options,
      answer
    };

    createQuiz.quiz.push(newQuiz);
    await createQuiz.save();

    return res
      .status(200)
      .json({ message: "Quiz added successfully", status: true });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});

// @desc    Course Quiz Delete
// @route   post /api/course/DeleteQuiz
// @access  user

export const deleteQuizController = asyncHandler(async (req, res) => {
  try {
    let { lessonId, quizId } = req.query;

    const updatedLesson = await Lesson.findByIdAndUpdate(
      lessonId,
      { $pull: { quiz: { _id: quizId } } },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Quiz deleted successfully", status: true });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});
