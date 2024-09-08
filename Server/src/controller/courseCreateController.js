import asyncHandler from "express-async-handler";
import Courses from "../database/Course.js";
import { uploadFileToS3 } from "../utils/S3Upload.js";
import fs from "fs";

// @desc    Course create
// @route   post /api/course/createCourse
// @access  user

export const createCourseController = asyncHandler(async(req,res)=>{
  try{
    const formData = req.body
    console.log(req.file,"formDataformDataformData")
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
    const createCourse = await Courses.create({
      previewVideo:uploadedVideoUrl,
      title:formData?.title,
      author:formData?.author,
      description:formData?.description,
      courseType:formData?.courseType,
      language:formData?.language.split(','),
    })
    res.status(200).json({messgae:"CourseCreate successfully",status:true})
  }
  catch(error){
    console.log(error,"error")
    res.status(500).json({message:"Something went wrong",data:error})
  }
})


// @desc    Course Find
// @route   post /api/course/findCourse
// @access  user


export const findCourseController = asyncHandler(async(req,res)=>{
  try{
    const findCourse = await Courses.find({})
    res.status(200).json({message:"course find successfully",data:findCourse})
  }
  catch(error){
    console.log(error,"error")
    res.status(500).json({message:"Something went wrong",data:error})
  }
})