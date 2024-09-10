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

export default function ControlledAccordions({ openAddLesson, setOpenAddLesson }) {
    const [expanded, setExpanded] = React.useState(false);
    const [openAddChapter, setOpenAddChapter] = React.useState(false);
    const [chapterId, setChapterId] = React.useState("");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const lessons = [
        {
            id: 1,
            title: "Introduction",
            chapters: [
                { id: 1, title: "chapter name sample 1", video: "" },
                { id: 2, title: "chapter name sample 2", video: "" },
                { id: 3, title: "chapter name sample 2", video: "" },
            ],
            quiz: {},
        },
        {
            id: 2,
            title: "Nulla facilisi.",
            chapters: [
                { id: 1, title: "chapter name sample 1", video: "" },
                { id: 2, title: "chapter name sample 2", video: "" },
                { id: 3, title: "chapter name sample 2", video: "" },
            ],
            quiz: {},
        },
    ];

    return (
        <div>
            {lessons.map((item, index) => (
                <Accordion sx={{ background: "#000", mb: 1, borderRadius: 1, boxShadow: "0 0 10px #ddd" }} key={index} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                    <AccordionSummary sx={{ color: "#fff" }} expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />} aria-controls={`panel${index + 1}bh-content`} id={`panel${index + 1}bh-header`}>
                        {/* <Typography sx={{ width: "33%", flexShrink: 0 }}><MenuIcon/></Typography> */}
                        <Typography sx={{ width: "100%", flexShrink: 0 }}>
                            <MenuIcon sx={{ mr: 1 }} /> Lesson {index + 1} - {item.title}
                        </Typography>
                        {/* <Typography sx={{ color: "text.secondary" }}>I am an accordion</Typography> */}
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#fff" }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "end", padding: "10px" }}>
                            <Button
                                onClick={() => {
                                    setOpenAddChapter(true);
                                    setChapterId(false);
                                }}
                                sx={{
                                    background: "#231F20",
                                    textTransform: "capitalize",
                                    mr: 1,
                                    "&:hover": {
                                        backgroundColor: "#231F20", // Maintain the same background color on hover
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
                                        backgroundColor: "#231F20", // Maintain the same background color on hover
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
                                            setOpenAddChapter(true);
                                            setChapterId(false);
                                        }}
                                        sx={{
                                            color: "#000",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                            background: "#6255FA30",
                                            textTransform: "capitalize",
                                            "&:hover": {
                                                backgroundColor: "rgba(98, 85, 250, 0.5)", // Maintain the same background color on hover
                                            },
                                        }}
                                        variant="contained"
                                    >
                                        Edit
                                    </Button>
                                    <Button
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
                                                backgroundColor: "transparent", // Maintain the same background color on hover
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
            <AddChapterPopup chapterId={chapterId} openAddChapter={openAddChapter} setOpenAddChapter={setOpenAddChapter} />
        </div>
    );
}
