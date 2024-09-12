import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Snackbar,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch} from "react-redux";
import Draggable from "react-draggable";
import InputField, {
  DescriptionInputField,
  SelectInputField
} from "../ReusableComponent/Input";
import { SubmitButton } from "../ReusableComponent/Button";
import TopicUploadComponent from "../ReusableComponent/TopicUploadComponent";
import { courseCreateAction } from "../../Redux/Action/courseAction";

export default function Dialogue({ open, handleClose }) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [previewVideo, setUploadPreview] = useState("");
  const [courseAuthor, setCourseAuthor] = useState("");
  const [coursePrice, setCoursePrice] = useState("");

  const [courseDescription, setCourseDescription] = useState("");
  const [typeOfCourse, setTypeOfCourse] = useState("");
  const [error, setError] = useState({});

  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

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
      errors.coursePrice = "CoursePrice is required";
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
      const formData = new FormData()
      formData.append("preview",previewVideo)
      formData.append("title",title),
      formData.append("author",courseAuthor),
      formData.append("price",coursePrice),
      formData.append("description",courseDescription),
      formData.append("courseType",typeOfCourse),
      formData.append("language",selectedLanguages)
      dispatch(courseCreateAction(formData))
      handleClose()
    }
  };
  return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            style: {
              minHeight: "50vh",
              //   maxHeight: "1vh",
              display: "flex",
              flexDirection: "column",
              minWidth: "820px",
              backgroundColor: "black"
            }
          }}
        >
          <DialogTitle
            style={{ fontSize: "24px", fontWeight: 600, color: "white" }}
            // id="draggable-dialog-title"
          >
            Create course
          </DialogTitle>
          <Divider
            sx={{
              borderColor: "#EBEBEB",
              borderWidth: 1,
              opacity: 0.5,
              ml: 2,
              mr: 2,
              mb: 1
            }}
          />
          <DialogContent
            sx={{
              overflowY: "auto", // Enable vertical scrolling
              "::-webkit-scrollbar": {
                width: "8px" // Scrollbar width
              },
              "::-webkit-scrollbar-track": {
                backgroundColor: "#2C2C2E" // Track color
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#585858", // Thumb color
                borderRadius: "4px" // Rounded corners
              }
            }}
          >
            <DialogContentText>
              <Typography
                sx={{
                  mb: 1,
                  color: "#F1F1F1",
                  fontWeight: 500,
                  fontSize: "14px"
                }}
              >
                Upload Preview Video
              </Typography>
              {!previewVideo ? (
                <>
                  <FormLabel
                    sx={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      //   maxWidth: "558px",
                      height: "150px",
                      cursor: "pointer",
                      //   border: `1px solid #C4C4C4`,
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      background: "#3F3F46",
                      // pl: "14px",
                      // pr: "8px",
                      "& img": {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#E4E4E7",
                        fontWeight: 500,
                        fontSize: "17px",
                        lineHeight: "24px"
                      }}
                    >
                      Upload file
                    </Typography>
                    <input
                      type="file"
                      hidden
                      name="courseImage"
                      multiple
                      onChange={(e) => {setUploadPreview(e.target.value)}}
                      accept=".mp4, .mov, .avi, .mkv, video/*"
                    />
                  </FormLabel>
                  <Typography sx={{color:"red"}}>{error?.previewVideo}</Typography>
                </>
              ) : (
                <Box>
                  <TopicUploadComponent
                    title="Preview video"
                    handleClick={() => setUploadPreview("")}
                  />
                </Box>
              )}
              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    mb: 1,
                    color: "#F1F1F1",
                    fontWeight: 500,
                    fontSize: "14px"
                  }}
                >
                  Title
                </Typography>
                <InputField
                  label="Course title"
                  handleChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </Box>
              <Typography sx={{color:"red"}}>{error?.title}</Typography>

              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    mb: 1,
                    color: "#F1F1F1",
                    fontWeight: 500,
                    fontSize: "14px"
                  }}
                >
                  Course author
                </Typography>
                <InputField
                  label={"Course author"}
                  handleChange={(e) => {setCourseAuthor(e.target.value)}}
                  value={courseAuthor}
                />
              </Box>
              <Typography sx={{color:"red"}}>{error?.courseAuthor}</Typography>

              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    mb: 1,
                    color: "#F1F1F1",
                    fontWeight: 500,
                    fontSize: "14px"
                  }}
                >
                  Course Price
                </Typography>
                <InputField
                  label={"Course Price"}
                  handleChange={(e) => {setCoursePrice(e.target.value)}}
                  value={coursePrice}
                />
              </Box>
              <Typography sx={{color:"red"}}>{error?.coursePrice}</Typography>

              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    mb: 1,
                    color: "#F1F1F1",
                    fontWeight: 500,
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
              <Typography sx={{color:"red"}}>{error?.courseDescription}</Typography>

              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    mb: 1,
                    color: "#F1F1F1",
                    fontWeight: 500,
                    fontSize: "14px"
                  }}
                >
                  Type of Course
                </Typography>
                <FormControl sx={{ display: "flex" }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Basic"
                    name="radio-buttons-group"
                    sx={{
                      color: "white",
                      display: "flex",
                      flexDirection: "row" // Align items horizontally
                    }}
                  >
                    <FormControlLabel
                      value="Basic"
                      control={
                        <Radio
                          sx={{
                            color: "white", // Color when unchecked
                            "&.Mui-checked": {
                              color: "white" // Color when checked
                            }
                          }}
                        />
                      }
                      label="Basic"
                      onChange={(e) => setTypeOfCourse(e.target.value)}
                    />
                    <FormControlLabel
                      value="Intermediate"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": {
                              color: "white"
                            }
                          }}
                        />
                      }
                      label="Intermediate"
                      onChange={(e) => setTypeOfCourse(e.target.value)}
                    />
                    <FormControlLabel
                      value="Advance"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": {
                              color: "white"
                            }
                          }}
                        />
                      }
                      label="Advance"
                      onChange={(e) => setTypeOfCourse(e.target.value)}
                    />
                  </RadioGroup>
                </FormControl>
              <Typography sx={{color:"red"}}>{error?.typeOfCourse}</Typography>

              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    mb: 1,
                    color: "#F1F1F1",
                    fontWeight: 500,
                    fontSize: "14px"
                  }}
                >
                  Select Language
                </Typography>
                <SelectInputField
                  handleChange={(e) => setSelectedLanguages(e.target.value)}
                  value={selectedLanguages}
                />
              </Box>
              <Typography sx={{color:"red"}}>{error?.selectedLanguages}</Typography>

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
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
  );
}
