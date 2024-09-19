import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import InputField, {
  DescriptionInputField,
  SelectInputField
} from "../ReusableComponent/Input";
import {
  courseCreateAction,
  courseUpdateAction
} from "../../Redux/Action/courseAction";
import { useDispatch, useSelector } from "react-redux";
import { SubmitButton } from "../ReusableComponent/Button";
import Swal from "sweetalert2";
import { COURSE_UPDATE_SUCCESS } from "../../Redux/Constants/courseConstants";

const EditCourse = ({ selectedCourse }) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const [title, setTitle] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [previewVideo, setUploadPreview] = useState();
  const [courseAuthor, setCourseAuthor] = useState("");
  const [coursePrice, setCoursePrice] = useState("");

  const [courseDescription, setCourseDescription] = useState("");
  const [typeOfCourse, setTypeOfCourse] = useState("");
  const [error, setError] = useState({});

  console.log({ previewVideo });
  console.log({ selectedLanguages });

  // Reducer ::::::::::::::::::

  let { courseUpdateSuccess } = useSelector((state) => {
    return state.courseUpdate;
  });

  const validate = () => {
    let errors = {};

    if (previewVideo === "") {
      errors.previewVideo = "Preview is required";
    }
    if (title === "") {
      errors.title = "Title is required";
    }
    if (courseAuthor === "") {
      errors.courseAuthor = "CourseAuthor is required";
    }

    if (coursePrice === "") {
      errors.coursePrice = "coursePrice is required";
    }
    if (courseDescription === "") {
      errors.courseDescription = "Course description is required";
    }
    if (typeOfCourse === "") {
      errors.typeOfCourse = "Type of course is required";
    }
    if (selectedLanguages.length == 0) {
      errors.selectedLanguages = "Language is required";
    }

    console.log(errors, "errorserrorserrors");
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      const formData = new FormData();
      formData.append("preview", previewVideo);
      formData.append("title", title),
        formData.append("author", courseAuthor),
        formData.append("price", coursePrice),
        formData.append("description", courseDescription),
        formData.append("courseType", typeOfCourse),
        formData.append("language", selectedLanguages);
      formData.append("id", selectedCourse?._id);
      dispatch(courseUpdateAction(formData));
      // handleClose()
    }
  };

  useEffect(() => {
    setTitle(selectedCourse?.title);
    setSelectedLanguages(selectedCourse?.language);
    setUploadPreview(selectedCourse?.previewVideo);
    setCourseAuthor(selectedCourse?.author);
    setCoursePrice(selectedCourse?.price);
    setCourseDescription(selectedCourse?.description);
    setTypeOfCourse(selectedCourse?.courseType);
  }, [selectedCourse]);

  useEffect(() => {
    if (courseUpdateSuccess) {
      Swal.fire("Updated!", "Course is updated", "success");
      dispatch({ type: COURSE_UPDATE_SUCCESS, payload: false });
    }
  }, [dispatch, courseUpdateSuccess]);

  console.log(selectedCourse, "selectedCourseselectedCourse");

  useEffect(() => {
    // Ensure the video starts playing when the video URL is available
    if (videoRef.current && previewVideo) {
      videoRef.current.load(); // Load the video
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, [previewVideo]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        transition: "all .3s ease"
      }}
    >
      <p style={{ fontSize: "14px", color: "#556987", fontWeight: "bold" }}>
        {typeOfCourse}
      </p>
      <h1 style={{ fontSize: 30, fontWeight: "900" }}>{title}</h1>

      <Typography sx={{ color: "black", mt: 2, mb: 1, fontWeight: "bold" }}>
        Upload Preview Video
      </Typography>
      <FormLabel
        sx={{
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "20px",
          width: "100%",
          cursor: "pointer",
          borderRadius: "4px"
        }}
      >
        <video
          ref={videoRef}
          width="300"
          muted
          loop
          style={{
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
          }}
        >
          <source
            src={
              typeof previewVideo === "string"
                ? previewVideo
                : previewVideo && URL.createObjectURL(previewVideo)
            }
            type="video/mp4"
          />
        </video>
        <Typography
          sx={{
            color: "#E4E4E7",
            fontWeight: 500,
            fontSize: "17px",
            lineHeight: "24px",
            backgroundColor: "#6255FA",
            padding: "10px 30px",
            borderRadius: "10px"
          }}
        >
          Upload file
        </Typography>
        <input
          type="file"
          hidden
          name="previewVideo"
          // multiple
          onChange={(e) => setUploadPreview(e.target.files[0])}
          accept=".mp4, .mov, .avi, .mkv, video/*"
        />
      </FormLabel>

      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{
            mb: 1,
            color: "#000",
            fontWeight: 700,
            fontSize: "14px"
          }}
        >
          Title
        </Typography>
        <InputField
          label="Course title"
          handleChange={(e) => setTitle(e.target.value)}
          value={title}
          bgcolor="#F3F6F9"
          color="#000"
        />
      </Box>
      <Typography sx={{ color: "red" }}>{error?.title}</Typography>

      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{
            mb: 1,
            color: "#000",
            fontWeight: 700,
            fontSize: "14px"
          }}
        >
          Course Author
        </Typography>
        <InputField
          label="Course title"
          handleChange={(e) => setCourseAuthor(e.target.value)}
          value={courseAuthor}
          bgcolor="#F3F6F9"
          color="#000"
        />
      </Box>
      <Typography sx={{ color: "red" }}>{error?.title}</Typography>

      
      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{
            mb: 1,
            color: "#000",
            fontWeight: 700,
            fontSize: "14px"
          }}
        >
          Course Price
        </Typography>
        <InputField
          label="Course price"
          handleChange={(e) => setCoursePrice(e.target.value)}
          value={coursePrice}
          bgcolor="#F3F6F9"
          color="#000"
        />
      </Box>
      <Typography sx={{ color: "red" }}>{error?.coursePrice}</Typography>
      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{
            mb: 1,
            color: "#000",
            fontWeight: 700,
            fontSize: "14px"
          }}
        >
          Description
        </Typography>
        <DescriptionInputField
          placeholder="Enter course description"
          handleChange={(e) => setCourseDescription(e.target.value)}
          value={courseDescription}
        />
      </Box>
      <Typography sx={{ color: "red" }}>{error?.courseDescription}</Typography>

      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{
            mb: 1,
            color: "#000",
            fontWeight: 700,
            fontSize: "14px"
          }}
        >
          Type of Course
        </Typography>
        <FormControl sx={{ display: "flex" }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={typeOfCourse}
            name="radio-buttons-group"
            sx={{
              color: "#000",
              display: "flex",
              flexDirection: "row", // Align items horizontally
              gap: "5px",
              pl: "10px",
              mb: 1
            }}
          >
            <FormControlLabel
              value="Basic"
              sx={{
                border: "1px solid #D5DAE1",
                paddingRight: " 15px",
                borderRadius: "5px"
              }}
              control={
                <Radio
                  sx={{
                    color: "#D5DAE1", // Color when unchecked
                    "&.Mui-checked": {
                      color: "#000" // Color when checked
                    }
                  }}
                />
              }
              label="Basic"
              onChange={(e) => setTypeOfCourse(e.target.value)}
            />
            <FormControlLabel
              value="Intermediate"
              sx={{
                border: "1px solid #D5DAE1",
                paddingRight: " 15px",
                borderRadius: "5px"
              }}
              control={
                <Radio
                  sx={{
                    color: "#D5DAE1",
                    "&.Mui-checked": {
                      color: "#000"
                    }
                  }}
                />
              }
              label="Intermediate"
              onChange={(e) => setTypeOfCourse(e.target.value)}
            />
            <FormControlLabel
              sx={{
                border: "1px solid #D5DAE1",
                paddingRight: " 15px",
                borderRadius: "5px"
              }}
              value="Advance"
              control={
                <Radio
                  sx={{
                    color: "#D5DAE1",
                    "&.Mui-checked": {
                      color: "#000"
                    }
                  }}
                />
              }
              label="Advance"
              onChange={(e) => setTypeOfCourse(e.target.value)}
            />
          </RadioGroup>
        </FormControl>
        <Typography sx={{ color: "red" }}>{error?.typeOfCourse}</Typography>
      </Box>
      <Box sx={{ mt: 1 }}>
        <Typography
          sx={{
            mb: 1,
            color: "#000",
            fontWeight: 700,
            fontSize: "14px"
          }}
        >
          Select Language
        </Typography>
        <SelectInputField
          handleChange={(e) => setSelectedLanguages(e.target.value)}
          value={selectedLanguages || selectedCourse.language}
        />
      </Box>
      <Typography sx={{ color: "red" }}>{error?.selectedLanguages}</Typography>
      <Box sx={{ mt: 1 }}>
        <SubmitButton
          title={"Add Course"}
          component="addCourse"
          widthSize="100%"
          bgColor="#6255FA"
          borderRadius="2px"
          heightSize="52px"
          type="click"
          handleSubmit={handleSubmit}
        />
      </Box>
    </div>
  );
};

export default EditCourse;
