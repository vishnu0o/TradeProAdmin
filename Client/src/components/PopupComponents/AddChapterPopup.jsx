import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Fragment, useEffect, useRef, useState } from "react";
import { Box, Divider, FormLabel } from "@mui/material";
import InputField from "../ReusableComponent/Input";
import { SubmitButton } from "../ReusableComponent/Button";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));



export default function AddChapterPopup({ chapterId,openAddChapter, setOpenAddChapter }) {

    const videoRef = useRef(null);

    const [chapterTitle, setChapterTitle] = useState("");
    const [chapterVideo, setChapterVideo] = useState();
    const [error, setError] = useState({});

    console.log({chapterVideo});

    const handleClose = () => {
        setOpenAddChapter(false);
    };

    const validate = () => {
        let errors = {};

        if (chapterTitle === "") {
            errors.chapterTitle = "Title is required";
        }
        if (chapterVideo === undefined) {
            errors.chapterVideo = "video is required";
          }

        console.log(errors, "errorserrorserrors");
        setError(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = () => {
        if (validate()) {
            // actions
        }
    };

    useEffect(()=>{
        
    })
    useEffect(() => {
        // Ensure the video starts playing when the video URL is available
        if (videoRef.current && chapterVideo) {
            videoRef.current.load(); // Load the video
            videoRef.current.play().catch((error) => {
                console.error("Autoplay failed:", error);
            });
        }
    }, [chapterVideo]);

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
                open={openAddChapter}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Chapter
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
                            Chapter Title
                        </Typography>
                        <InputField label="Chapter title" handleChange={(e) => setChapterTitle(e.target.value)} value={chapterTitle} />
                    </Box>
                    <Typography sx={{ color: "red" }}>{error?.chapterTitle}</Typography>

                    <Typography sx={{ color: "#fff", mt: 2, mb: 1,fontSize:"14px" }}>Upload Video</Typography>
                    <FormLabel
                        sx={{
                            boxSizing: "border-box",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            gap: "20px",
                            width: "100%",
                            cursor: "pointer",
                            borderRadius: "4px",
                            background:"#3F3F46"
                        }}
                    >
                        <video
                            ref={videoRef}
                            width="300"
                            muted
                            loop
                            style={{
                                borderRadius: "4px",
                                // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            <source src={typeof chapterVideo === "string" ? chapterVideo : chapterVideo && URL.createObjectURL(chapterVideo)} type="video/mp4" />
                        </video>

                        <Typography
                            sx={{
                                color: "#E4E4E7",
                                fontWeight: 500,
                                fontSize: "17px",
                                lineHeight: "24px",
                                // backgroundColor: "#6255FA",
                                padding: "10px 30px",
                                borderRadius: "10px",
                            }}
                        >
                            Upload File
                        </Typography>
                        <input
                            type="file"
                            hidden
                            name="previewVideo"
                            // multiple
                            onChange={(e) => setChapterVideo(e.target.files[0])}
                            accept=".mp4, .mov, .avi, .mkv, video/*"
                        />
                    </FormLabel>
                                <Typography sx={{ color: "red" }}>{error?.chapterVideo}</Typography>
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
