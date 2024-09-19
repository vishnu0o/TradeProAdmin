import asyncHandler from "express-async-handler";
import Courses from "../database/Course.js";
import { uploadFileToS3 } from "../utils/S3Upload.js";
import fs from "fs";

// @desc    Course create
// @route   post /api/course/createCourse
// @access  user

export const createCourseController = asyncHandler(async (req, res) => {
  try {
    const formData = req.body;
    console.log(req.file, "formDataformDataformData");
    let uploadedVideoUrl;
    if (req.file) {
      const fileData = fs.readFileSync(req.file.path);
      const fileName = `TradeProCourseVideo${req.file.filename}`;
      const folderName = "PreviewVideo";
      const contentType = req.file.mimetype;
      uploadedVideoUrl = await uploadFileToS3(
        fileData,
        fileName,
        folderName,
        contentType
      );
    }
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    const createCourse = await Courses.create({
      previewVideo: uploadedVideoUrl,
      title: formData?.title,
      author: formData?.author,
      price: formData?.price,
      description: formData?.description,
      courseType: formData?.courseType,
      publishedYear: formattedDate,
      courseDuration: formData?.courseDuration,
      language: formData?.language.split(",")
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

// @desc    Course FindOne
// @route   post /api/course/findOneCourse
// @access  user

export const findOneCourseController = asyncHandler(async (req, res) => {
  try {
    const { id } = req.query;
    const findCourse = await Courses.findOne({ _id: id });
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
    console.log(req.file, "formDataformDataformData");
    console.log(formData, "BODYYYYYYYYYYYY");
    let uploadedVideoUrl;
    if (req.file) {
      const fileData = fs.readFileSync(req.file.path);
      const fileName = `TradeProCourseVideo${req.file.filename}`;
      const folderName = "PreviewVideo";
      const contentType = req.file.mimetype;
      uploadedVideoUrl = await uploadFileToS3(
        fileData,
        fileName,
        folderName,
        contentType
      );
    }
    const updateCourse = await Courses.updateOne(
      { _id: formData?.id },
      {
        $set: {
          previewVideo: uploadedVideoUrl
            ? uploadedVideoUrl
            : formData?.previewVideo,
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
    const { lesson, id } = req.body;

    const findCourse = await Courses.findOne({ _id: id });

    const createLesson = await Courses.updateOne(
      { _id: id },
      {
        $push: {
          lessons: { lessonName: lesson }
        }
      }
    );
    res
      .status(200)
      .json({ message: "Lesson created successfully", status: findCourse });
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
    const { lesson, courseId, lessonId } = req.body;

    const updateLesson = await Courses.updateOne(
      { _id: courseId, "lessons._id": lessonId },
      {
        $set: {
          "lessons.$.lessonName": lesson
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
    const { courseId, lessonId } = req.query;

    const updateCourse = await Courses.updateOne(
      { _id: courseId },
      { $pull: { lessons: { _id: lessonId } } }
    );

    if (updateCourse.nModified === 0) {
      return res.status(404).json({ message: "Lesson not found or already deleted", status: false });
    }

    res.status(200).json({ message: "Lesson deleted successfully", status: true });
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
    // const { chapterTitle,chapterVideo, id,lessonId } = req.body;
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
    }

    const createChapter = await Courses.updateOne(
      { _id: formData?.id, "lessons._id": formData?.lessonId },
      {
        $push: {
          "lessons.$.chapters": {
            title: formData?.chapterTitle,
            video: uploadedVideoUrl
          }
        }
      }
    );
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
    }
    const updateLesson = await Courses.updateOne(
      {
        _id: formData?.courseId,
        "lessons._id": formData?.lessonId,
        "lessons.chapters._id": formData?.chapterId
      },
      {
        $set: {
          "lessons.$[lesson].chapters.$[chapter].title": formData?.updatedChapter,
          "lessons.$[lesson].chapters.$[chapter].video": uploadedVideoUrl ? uploadedVideoUrl : formData?.updatedVideo
        }
      },
      {
        arrayFilters: [
          { "lesson._id": formData?.lessonId },   // Match lesson by ID
          { "chapter._id": formData?.chapterId }, // Match chapter by ID
        ],
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
    const { courseId, lessonId, chapterId, } = req.query;
    const updateCourse = await Courses.updateOne(
      { 
        _id: courseId, 
        "lessons._id": lessonId 
      },
      {
        $pull: {
          "lessons.$.chapters": { _id: chapterId }
        }
      }
    );
    res
      .status(200)
      .json({ message: "Chapter Deleted successfully", status: true });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong", data: error });
  }
});
