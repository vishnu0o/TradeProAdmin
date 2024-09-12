import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import AddLessonPopup from "../PopupComponents/AddLessonPopup";
import AddChapterPopup from "../PopupComponents/AddChapterPopup";
import { useDispatch, useSelector } from "react-redux";
import { courseFindOneAction } from "../../Redux/Action/courseAction";
import { useLocation } from "react-router-dom";
import EditChapterPopup from "../PopupComponents/EditChapterPopup";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditLessonPopup from "../PopupComponents/EditLessonPopup";

export default function ControlledAccordions({ openAddLesson, setOpenAddLesson }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  // Destructure query parameters
  const id = query.get("id");
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const [openAddChapter, setOpenAddChapter] = React.useState(false);
  const [openEditChapter, setOpenEditChapter] = React.useState(false);
  const [openEditLesson, setOpenEditLesson] = React.useState(false);
  const [lesson, setLesson] = React.useState([]);
  const [lessonId, setLessonId] = React.useState("");
  const [chapter, setChapter] = React.useState({});
  const [selectedLesson, setSelectedLesson] = React.useState({});

  console.log({ lessonId });
  console.log({ chapter });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleLessonDelete = (id) => {
    console.log("leeeeeeeeeeeeeeeeeeeeee", { id });

    // lesson delete action
  };
  const handleChapterDelete = (chapterId) => {
    console.log({ chapterId });

    // chapter delete action
  };

  // Reducer ::::::::::::::::::

  let { courseFindOneSuccess } = useSelector((state) => {
    return state.courseFindOne;
  });

  let { courseLessonCreateSuccess } = useSelector((state) => {
    return state.courseLessonCreate;
  });

  let { courseChapterCreateSuccess } = useSelector((state) => {
    return state.courseChapterCreate;
  });

  React.useEffect(() => {
    dispatch(courseFindOneAction(id));
  }, [dispatch, courseLessonCreateSuccess,courseChapterCreateSuccess]);

  React.useEffect(() => {
    if (courseFindOneSuccess) {
      setLesson(courseFindOneSuccess?.data?.lessons);
    }
  }, [courseFindOneSuccess]);

  console.log(courseFindOneSuccess, "courseFindOneSuccesscourseFindOneSuccess");

  return (
    <div>
      {lesson?.map((item, index) => (
        <Accordion
          sx={{
            background: "#000",
            mb: 1,
            borderRadius: 1,
            boxShadow: "0 0 10px #ddd",
          }}
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary sx={{ color: "#fff" }} expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />} aria-controls={`panel${index + 1}bh-content`} id={`panel${index + 1}bh-header`}>
            <Typography sx={{ width: "90%", flexShrink: 0 }}>
              <MenuIcon sx={{ mr: 1 }} /> Lesson {index + 1} - {item.lessonName}
            </Typography>
            <Button
              onClick={() => {
                setSelectedLesson(item);
                setOpenEditLesson(true);
              }}
              sx={{
                minWidth: "0",
                width: "50px",
                height: "30px",
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
                  backgroundColor: "rgba(225, 225, 225, .2)",
                },
              }}
              variant="contained"
            >
              <EditOutlinedIcon />
            </Button>
            <Button
              onClick={() => handleLessonDelete(item._id)}
              sx={{
                minWidth: "0",
                width: "50px",
                height: "30px",
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
                  backgroundColor: "rgba(252, 0, 5, .2)",
                },
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
                padding: "10px",
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
                    backgroundColor: "#231F20",
                  },
                }}
                variant="contained"
              >
                <AutoStoriesOutlinedIcon sx={{ mr: 1 }} />
                Add Chapter
              </Button>
              <Button
                sx={{
                  background: "#231F20",
                  textTransform: "capitalize",
                  mr: 1,
                  "&:hover": {
                    backgroundColor: "#231F20",
                  },
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
                    fontSize: "14px",
                  }}
                >
                  Chapter {index + 1}
                </Typography>
                <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    sx={{
                      color: "#1C232D",
                      fontSize: "13px",
                      background: "#F5F6F7",
                      width: "100%",
                      p: 1,
                      borderRadius: "5px",
                      textTransform: "capitalize",
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
                        backgroundColor: "rgba(98, 85, 250, 0.5)",
                      },
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
                        backgroundColor: "transparent",
                      },
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
      <AddLessonPopup openAddLesson={openAddLesson} setOpenAddLesson={setOpenAddLesson} />
      <EditLessonPopup lesson={selectedLesson} openEditLesson={openEditLesson} setOpenEditLesson={setOpenEditLesson} />
      <AddChapterPopup lessonId={lessonId} openAddChapter={openAddChapter} setOpenAddChapter={setOpenAddChapter} />
      <EditChapterPopup lessonId={lessonId} chapter={chapter} openEditChapter={openEditChapter} setOpenEditChapter={setOpenEditChapter} />
    </div>
  );
}
