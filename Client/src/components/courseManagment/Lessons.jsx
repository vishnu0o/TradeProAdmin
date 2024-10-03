import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Chip } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import AddLessonPopup from "../PopupComponents/AddLessonPopup";
import AddChapterPopup from "../PopupComponents/AddChapterPopup";
import { useDispatch, useSelector } from "react-redux";
import {
  courseChapterDeleteAction,
  courseFindOneAction,
  courselanguageFindOneAction,
  courseLessonDeleteAction,
  courseQuizDeleteAction
} from "../../Redux/Action/courseAction";
import { useLocation } from "react-router-dom";
import EditChapterPopup from "../PopupComponents/EditChapterPopup";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditLessonPopup from "../PopupComponents/EditLessonPopup";
import AddQuizPopup from "../PopupComponents/AddQuizPopup";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import TableNoItemComponent from "../ReusableComponent/TableNoItemComponent";
import EditQuizPopup from "../PopupComponents/EditQuizPopup";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(2),
    marginTop: "8px"
  },
  hoverElement: {
    "&:hover": {
      color: "#FE0B7A" // Set the hover color
    },
    "&.clicked": {
      backgroundColor: "#FE0B7A",
      color: "white"
    }
  }
}));

export default function ControlledAccordions(
  {
    // openAddLesson,
    // setOpenAddLesson
  }
) {
  const classes = useStyles();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const dispatch = useDispatch();
  const videoRef = React.useRef(null);

  // Destructure query parameters
  const id = query.get("id");
  const [expanded, setExpanded] = React.useState(false);
  const [openAddLesson, setOpenAddLesson] = React.useState(false);
  const [openAddChapter, setOpenAddChapter] = React.useState(false);
  const [openEditChapter, setOpenEditChapter] = React.useState(false);
  const [openEditLesson, setOpenEditLesson] = React.useState(false);
  const [openAddQuiz, setOpenAddQuiz] = React.useState(false);
  const [openEditQuiz, setOpenEditQuiz] = React.useState(false);


  const [lesson, setLesson] = React.useState([]);
  const [lessonId, setLessonId] = React.useState("");
  const [quiz, setQuiz] = React.useState({});
  const [chapter, setChapter] = React.useState({});

  const [selectedLesson, setSelectedLesson] = React.useState({});
  const [clicked, setClicked] = React.useState("");

  console.log({ lessonId });
  console.log({ chapter });

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(isExpanded, "isExpandedisExpanded");
    setExpanded(isExpanded ? panel : false);
  };

  const handleLessonDelete = (lessonId) => {
    dispatch(courseLessonDeleteAction(id, lessonId));
  };
  const handleChapterDelete = (chapterId) => {
    console.log({ chapterId });
    dispatch(courseChapterDeleteAction(chapterId));
  };
  const handleQuizDelete = (lessonId,quizId) => {
    console.log({ quizId });
    dispatch(courseQuizDeleteAction(lessonId,quizId));
  };

  // Reducer ::::::::::::::::::

  let { courseFindOneSuccess } = useSelector((state) => {
    return state.courseFindOne;
  });

  let { courselanguageFindOneSuccess } = useSelector((state) => {
    return state.courselanguageFindOne;
  });

  let { courseLessonCreateSuccess } = useSelector((state) => {
    return state.courseLessonCreate;
  });

  let { courseLessonUpdateSuccess } = useSelector((state) => {
    return state.courseLessonUpdate;
  });

  let { courseLessonDeleteSuccess } = useSelector((state) => {
    return state.courseLessonDelete;
  });

  let { courseChapterCreateLoading, courseChapterCreateSuccess } = useSelector(
    (state) => {
      return state.courseChapterCreate;
    }
  );

  let { courseChapterUpdateLoading, courseChapterUpdateSuccess } = useSelector(
    (state) => {
      return state.courseChapterUpdate;
    }
  );

  let { courseChapterDeleteSuccess } = useSelector((state) => {
    return state.courseChapterDelete;
  });

  let { courseQuizCreateLoading, courseQuizCreateSuccess } = useSelector(
    (state) => {
      return state.courseQuizCreate;
    }
  );

  let { courseQuizDeleteLoading, courseQuizDeleteSuccess } = useSelector(
    (state) => {
      return state.courseQuizDelete;
    }
  );
  

  React.useEffect(() => {
    // Ensure the video starts playing when the video URL is available
    if (videoRef.current) {
      videoRef.current.load(); // Load the video
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  React.useEffect(() => {
    dispatch(courseFindOneAction(id));
    dispatch(courselanguageFindOneAction(id));
  }, [
    dispatch,
    courseLessonCreateSuccess,
    courseChapterCreateSuccess,
    courseLessonUpdateSuccess,
    courseLessonDeleteSuccess,    
    courseChapterUpdateSuccess,
    courseQuizCreateSuccess,
    courseQuizDeleteSuccess
  ]);

  React.useEffect(() => {
    if (courseFindOneSuccess) {
      setLesson(
        courseFindOneSuccess?.data?.filter(
          (value) => value?.lessonLanguage == clicked
        )
      );
    }
  }, [courseFindOneSuccess, clicked]);

  console.log(
    courselanguageFindOneSuccess,
    "courselanguageFindOneSuccesscourselanguageFindOneSuccess"
  );
  console.log(courseFindOneSuccess, "courseFindOneSuccesscourseFindOneSuccess");
  console.log(lesson, "lessonlessonlesson");

  return (
    <>
      {courselanguageFindOneSuccess?.data?.language?.map((value) => (
        <Chip
          className={`${classes.hoverElement} ${
            clicked === value ? "clicked" : ""
          }`}
          label={value}
          component="a"
          clickable
          sx={{ m: 1 }}
          onClick={() => setClicked(value)}
        />
      ))}
      {clicked !== "" && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end", // Align button to the right
              padding: "10px 0" // Optional padding
            }}
          >
            <Button
              onClick={() => setOpenAddLesson(true)}
              sx={{
                display: "inline-flex",
                background: "#231F20",
                textTransform: "capitalize",
                ml: "auto", // Optional, can be removed due to flexbox usage
                mb: 1,
                "&:hover": {
                  backgroundColor: "#231F20" // Maintain the same background color on hover
                }
              }}
              variant="contained"
            >
              <ClearAllIcon sx={{ mr: 1 }} />
              Add Lesson
            </Button>
          </div>

          {lesson?.length == 0 && <TableNoItemComponent />}
          {lesson?.map((item, index) => (
            <Accordion
              sx={{
                background: "#000",
                mb: 1,
                borderRadius: 1,
                boxShadow: "0 0 10px #ddd"
              }}
              key={index}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummary
                sx={{ color: "#fff" }}
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls={`panel${index + 1}bh-content`}
                id={`panel${index + 1}bh-header`}
              >
                <Typography sx={{ width: "90%", flexShrink: 0 }}>
                  <MenuIcon sx={{ mr: 1 }} /> Lesson {index + 1} -{" "}
                  {item.lessonName}
                </Typography>
                <Button
                  onClick={() => {
                    setSelectedLesson(item);
                    setOpenEditLesson(true);
                  }}
                  sx={{
                    minWidth: "0",
                    width: "35px",
                    height: "32px",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "bold",
                    background: "transparent",
                    boxShadow: "none ",
                    textTransform: "capitalize",
                    borderRadius: "50%",
                    padding: "0",

                    "&:hover": {
                      boxShadow: "none ",
                      backgroundColor: "rgba(225, 225, 225, .2)"
                    }
                  }}
                  variant="contained"
                >
                  <EditOutlinedIcon />
                </Button>
                <Button
                  onClick={() => handleLessonDelete(item._id)}
                  sx={{
                    minWidth: "0",
                    width: "35px",
                    height: "32px",
                    color: "#FC0005",
                    fontSize: "12px",
                    fontWeight: "bold",
                    background: "transparent",
                    boxShadow: "none ",
                    textTransform: "capitalize",
                    borderRadius: "50%",
                    padding: "0",

                    "&:hover": {
                      boxShadow: "none ",
                      backgroundColor: "rgba(252, 0, 5, .2)"
                    }
                  }}
                  variant="contained"
                >
                  <DeleteIcon />
                </Button>
              </AccordionSummary>
              <AccordionDetails sx={{ background: "#fff" }}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                    padding: "10px"
                  }}
                >
                  <Button
                    onClick={() => {
                      setOpenAddChapter(true);
                      setLessonId(item?._id);
                    }}
                    sx={{
                      background: "#231F20",
                      textTransform: "capitalize",
                      mr: 1,
                      "&:hover": {
                        backgroundColor: "#231F20"
                      }
                    }}
                    variant="contained"
                  >
                    <AutoStoriesOutlinedIcon sx={{ mr: 1 }} />
                    Add Chapter
                  </Button>
                  <Button
                    onClick={() => {
                      setOpenAddQuiz(true);
                      setLessonId(item._id);
                    }}
                    sx={{
                      background: "#231F20",
                      textTransform: "capitalize",
                      mr: 1,
                      "&:hover": {
                        backgroundColor: "#231F20"
                      }
                    }}
                    variant="contained"
                  >
                    <HelpOutlineOutlinedIcon sx={{ mr: 1 }} />
                    Add Quiz
                  </Button>
                </div>
                {item.chapters.map((chapter, index) => (
                  <Box sx={{ mt: 2 }} key={index}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "14px"
                      }}
                    >
                      Chapter {index + 1}
                    </Typography>
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        alignItems: "center",
                        gap: 1
                      }}
                    >
                      <video
                        ref={videoRef}
                        width="100"
                        muted
                        loop
                        style={{
                          borderRadius: "10px",
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
                        }}
                      >
                        <source src={chapter.video} type="video/mp4" />
                      </video>
                      <Typography
                        sx={{
                          color: "#1C232D",
                          fontSize: "13px",
                          background: "#F5F6F7",
                          width: "100%",
                          p: 1,
                          borderRadius: "5px",
                          textTransform: "capitalize"
                        }}
                      >
                        {chapter.title}
                      </Typography>
                      <Button
                        onClick={() => {
                          setOpenEditChapter(true);
                          setLessonId(item._id);
                          setChapter(chapter);
                        }}
                        sx={{
                          color: "#000",
                          fontSize: "12px",
                          fontWeight: "bold",
                          background: "#6255FA30",
                          textTransform: "capitalize",
                          "&:hover": {
                            backgroundColor: "rgba(98, 85, 250, 0.5)"
                          }
                        }}
                        variant="contained"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleChapterDelete(chapter._id)}
                        sx={{
                          minWidth: "0",
                          width: "43px",
                          height: "35px",
                          color: "#D7503D",
                          fontSize: "12px",
                          fontWeight: "bold",
                          background: "transparent",
                          boxShadow: "none ",
                          textTransform: "capitalize",
                          borderRadius: "50%",
                          padding: "0",

                          "&:hover": {
                            boxShadow: "none ",
                            backgroundColor: "transparent"
                          }
                        }}
                        variant="contained"
                      >
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </Box>
                ))}

                {item.quiz.map((quiz, index) => (
                  <Box sx={{ mt: 2 }} key={index}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "14px"
                      }}
                    >
                      Quiz {index + 1}
                    </Typography>
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        alignItems: "center",
                        gap: 1
                      }}
                    >
                      {/* <video
                        ref={videoRef}
                        width="100"
                        muted
                        loop
                        style={{
                          borderRadius: "10px",
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
                        }}
                      >
                        <source src={chapter.video} type="video/mp4" />
                      </video> */}
                      <Typography
                        sx={{
                          color: "#1C232D",
                          fontSize: "13px",
                          background: "#F5F6F7",
                          width: "100%",
                          p: 1,
                          borderRadius: "5px",
                          textTransform: "capitalize"
                        }}
                      >
                        {quiz.question}
                      </Typography>
                      {/* <Button
                        onClick={() => {
                          setOpenEditQuiz(true);
                          setLessonId(item._id);
                          setQuiz(quiz);
                        }}
                        sx={{
                          color: "#000",
                          fontSize: "12px",
                          fontWeight: "bold",
                          background: "#6255FA30",
                          textTransform: "capitalize",
                          "&:hover": {
                            backgroundColor: "rgba(98, 85, 250, 0.5)"
                          }
                        }}
                        variant="contained"
                      >
                        Edit
                      </Button> */}
                      <Button
                        onClick={() => handleQuizDelete(item._id,quiz._id)}
                        sx={{
                          minWidth: "0",
                          width: "43px",
                          height: "35px",
                          color: "#D7503D",
                          fontSize: "12px",
                          fontWeight: "bold",
                          background: "transparent",
                          boxShadow: "none ",
                          textTransform: "capitalize",
                          borderRadius: "50%",
                          padding: "0",

                          "&:hover": {
                            boxShadow: "none ",
                            backgroundColor: "transparent"
                          }
                        }}
                        variant="contained"
                      >
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
          <AddLessonPopup
            openAddLesson={openAddLesson}
            setOpenAddLesson={setOpenAddLesson}
            selectedLanguage={clicked}
          />
          <EditLessonPopup
            lesson={selectedLesson}
            openEditLesson={openEditLesson}
            setOpenEditLesson={setOpenEditLesson}
          />

          <AddChapterPopup
            lessonId={lessonId}
            openAddChapter={openAddChapter}
            setOpenAddChapter={setOpenAddChapter}
          />
          <EditChapterPopup
            lessonId={lessonId}
            chapter={chapter}
            openEditChapter={openEditChapter}
            setOpenEditChapter={setOpenEditChapter}
          />

          <AddQuizPopup
            lessonId={lessonId}
            openAddQuiz={openAddQuiz}
            setOpenAddQuiz={setOpenAddQuiz}
          />
            {/* <EditQuizPopup
            lessonId={lessonId}
            quizData={quiz}
            openAddQuiz={openEditQuiz}
            setOpenAddQuiz={setOpenEditQuiz}
          /> */}
        </div>
      )}
    </>
  );
}
