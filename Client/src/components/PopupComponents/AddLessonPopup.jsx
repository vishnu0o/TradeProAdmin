import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Fragment, useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import InputField from "../ReusableComponent/Input";
import { SubmitButton } from "../ReusableComponent/Button";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { courseLessonCreateAction } from "../../Redux/Action/courseAction";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}));

export default function AddLessonPopup({
  openAddLesson,
  setOpenAddLesson,
  lessonHeading,
  lessonSubHeading,
  placeHolder,
  selectedLanguage
}) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  // Destructure query parameters
  const id = query.get("id");
  const dispatch = useDispatch();
  const [lessonTitle, setLessonTitle] = useState("");
  const [level, setLevel] = useState("");

  const [error, setError] = useState({});

  const handleClose = () => {
    setOpenAddLesson(false);
  };

  const validate = () => {
    let errors = {};

    if (lessonTitle === "") {
      errors.lessonTitle = "Title is required";
    }

    console.log(errors, "errorserrorserrors");
    setError(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    if (validate()) {
      dispatch(courseLessonCreateAction(selectedLanguage,lessonTitle, id));
      handleClose();
    }
  };

  return (
    <>
      <BootstrapDialog
        PaperProps={{
          style: {
            color: "#fff",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            minWidth: "820px",
            backgroundColor: "black"
          }
        }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openAddLesson}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {lessonHeading ? lessonHeading : "Lesson"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[600],
            "&:hover": {
              color: "#fff"
            }
          })}
        >
          <CloseIcon />
        </IconButton>
        <Divider
          sx={{
            borderColor: "#eee",
            borderWidth: ".1px",
            opacity: 0.2,
            ml: 2,
            mr: 2,
            mb: 1
          }}
        />
        <DialogContent dividers>
          <Box sx={{ mt: 1 }}>
            <Typography
              sx={{
                mb: 1,
                color: "#F1F1F1",
                fontWeight: 500,
                fontSize: "14px"
              }}
            >
              {lessonSubHeading ? lessonSubHeading : "Lesson Title"}
            </Typography>
            {lessonHeading == "Levels" && (
                <Box sx={{mb:1}}>


                    <InputField
                      label={"Level"}
                      handleChange={(e) => setLevel(e.target.value)}
                      value={level}
                    />

                </Box>
            )}
            <InputField
              label={placeHolder?placeHolder:"Lesson title"}
              handleChange={(e) => setLessonTitle(e.target.value)}
              value={lessonTitle}
            />
          </Box>
          <Typography sx={{ color: "red" }}>{error?.lessonTitle}</Typography>
        </DialogContent>
        <DialogActions
          style={{
            padding: "0 17px 30px "
          }}
        >
          <SubmitButton
            title={"Save"}
            component="addCourse"
            widthSize="100%"
            bgColor="#6255FA"
            borderRadius="4px"
            heightSize="52px"
            type="click"
            handleSubmit={handleSubmit}
          />
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
