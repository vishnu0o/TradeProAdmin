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
import { courseLessonCreateAction, courseQuizCreateAction } from "../../Redux/Action/courseAction";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function EditQuizPopup({lessonId, openAddQuiz, setOpenAddQuiz,quizData }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  // Destructure query parameters

  const id = query.get("id");
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    { sl: 1, option: "", correct: false },
    { sl: 2, option: "", correct: false },
    { sl: 3, option: "", correct: false },
    { sl: 4, option: "", correct: false },
  ]);
  const [answer,setAnswer] = useState('')

  console.log("optionsss", options);
  const [error, setError] = useState({});

  const handleChangeOptions = (value, index) => {
    const updatedOptions = [...options];
    updatedOptions[index].option = value;
    setOptions(updatedOptions);
  };

  const handleCorrectAnswer = (value) => {
    setAnswer(value)
    const updatedOptions = options
      .map((item) => {
        return {
          ...item,
          correct: false,
        };
      })
      .map((item) => {
        if (item.sl === parseInt(value)) {
          return { ...item, correct: true };
        }
        return item;
      });

    const isValid = updatedOptions.some((item) => item.correct === true);

    if (isValid) {
      console.log("Correct answer set successfully!");
      setError({});
    } else {
      setError({ correctAnswer: "Please select a valid option." });
    }
    setOptions(updatedOptions);
  };
  const handleClose = () => {
    setOpenAddQuiz(false);
  };

  const validate = () => {
    let errors = {};

    if (question === "") {
      errors.question = "question is required";
    }

    console.log(errors, "errorserrorserrors");
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(()=>{
    setQuestion(quizData?.question)
    const addedOptions = quizData?.options
    console.log(addedOptions,"addedOptionsssssssssssssssssss")
    const updatedArray = options.map((item, index) => ({
      ...item,
      option: addedOptions[index] || "" 
    }));
    console.log(updatedArray,"updatedArayyyyyyyyyyyyyyyy")

    setOptions(updatedArray);
    // const updatedOptions = [...options];
    // updatedOptions[index].option = quizData?.options;
    // setOptions(updatedOptions);
  },[quizData])
  const handleSubmit = () => {
    if (validate()) {
      dispatch(courseQuizCreateAction(lessonId,question,options,answer))
      handleClose();
    }
  };

  console.log(quizData,"quizDataaaaaaaaaaaaaaaa")

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
            backgroundColor: "black",
          },
        }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openAddQuiz}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Edit Quiz
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
              color: "#fff",
            },
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
            mb: 1,
          }}
        />
        <DialogContent dividers>
          <Box sx={{ mt: 1 }}>
            <Typography
              sx={{
                mb: 1,
                color: "#F1F1F1",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Question 1
            </Typography>
            <InputField label="Enter the Question" handleChange={(e) => setQuestion(e.target.value)} value={question} />
          </Box>
          <Typography sx={{ color: "red" }}>{error?.question}</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{
                mb: 1,
                color: "#F1F1F1",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Options
            </Typography>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "40%" }}>
              {options.map((item, index) => (
                <InputField {...(item.correct ? { bgcolor: "#03a10b" } : {})} label={`option${item.sl}`} handleChange={(e) => handleChangeOptions(e.target.value, index)} key={index} />
              ))}
            </div>
          </Box>
          <Box sx={{ mt: 2, width: "40%" }}>
            <Typography
              sx={{
                mb: 1,
                color: "#F1F1F1",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Correct Answer
            </Typography>
            <InputField label="Enter the correct sl number" handleChange={(e) => handleCorrectAnswer(e.target.value)} />
          </Box>
          <Typography sx={{ color: "red" }}>{error?.correctAnswer}</Typography>
        </DialogContent>
        <DialogActions
          style={{
            padding: "0 17px 30px ",
          }}
        >
          <SubmitButton title={"Save"} component="addCourse" widthSize="100%" bgColor="#6255FA" borderRadius="4px" heightSize="52px" type="click" handleSubmit={handleSubmit} />
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
