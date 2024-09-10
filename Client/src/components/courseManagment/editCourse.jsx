import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import InputField, { DescriptionInputField, SelectInputField } from "../ReusableComponent/Input";

const EditCourse = ({ selectedCourse }) => {
    const videoRef = useRef(null);

    const [formData, setFormData] = useState(null);
    const [uploadPreview, setUploadPreview] = useState(null);
    console.log({ formData });

    const handleVideoUpload = (e) => {
        const file = e.target.files[0]; // Get the uploaded file
        if (file) {
            const formData = new FormData();
            formData.append("previewVideo", file);

            const videoURL = URL.createObjectURL(file);
            setUploadPreview(videoURL);
        }
    };

    useEffect(() => {
        setFormData(selectedCourse);
    }, [selectedCourse]);

    useEffect(() => {
        // Ensure the video starts playing when the video URL is available
        if (videoRef.current && formData?.previewVideo) {
            videoRef.current.load(); // Load the video
            videoRef.current.play().catch((error) => {
                console.error("Autoplay failed:", error);
            });
        }
    }, [formData?.previewVideo, uploadPreview]);



    return (
        <div style={{ display: "flex", flexDirection: "column", transition: "all .3s ease" }}>
            <p style={{ fontSize: "14px", color: "#556987", fontWeight: "bold" }}>{formData?.courseType}</p>
            <h1 style={{ fontSize: 30, fontWeight: "900" }}>{formData?.title}</h1>

            <Typography sx={{ color: "black", mt: 2, mb: 1, fontWeight: "bold" }}>Upload Preview Video</Typography>
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
                }}
            >
                <video
                    ref={videoRef}
                    width="300"
                    muted
                    loop
                    style={{
                        borderRadius: "10px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <source src={uploadPreview || formData?.previewVideo} type="video/mp4" />
                </video>
                <Typography
                    sx={{
                        color: "#E4E4E7",
                        fontWeight: 500,
                        fontSize: "17px",
                        lineHeight: "24px",
                        backgroundColor: "#6255FA",
                        padding: "10px 30px",
                        borderRadius: "10px",
                    }}
                >
                    Upload file
                </Typography>
                <input
                    type="file"
                    hidden
                    name="previewVideo"
                    // multiple
                    onChange={(e) => handleVideoUpload(e)}
                    accept=".mp4, .mov, .avi, .mkv, video/*"
                />
            </FormLabel>

            <Box sx={{ mt: 2 }}>
                <Typography
                    sx={{
                        mb: 1,
                        color: "#000",
                        fontWeight: 700,
                        fontSize: "14px",
                    }}
                >
                    Title
                </Typography>
                <InputField label="Course title" handleChange={(e) => setTitle(e.target.value)} value={formData?.title} bgcolor="#F3F6F9" color="#000" />
            </Box>
            {/* <Typography sx={{color:"red"}}>{error?.title}</Typography> */}

            <Box sx={{ mt: 2 }}>
                <Typography
                    sx={{
                        mb: 1,
                        color: "#000",
                        fontWeight: 700,
                        fontSize: "14px",
                    }}
                >
                    Course Author
                </Typography>
                <InputField label="Course title" handleChange={(e) => setTitle(e.target.value)} value={formData?.author} bgcolor="#F3F6F9" color="#000" />
            </Box>
            {/* <Typography sx={{color:"red"}}>{error?.title}</Typography> */}
            <Box sx={{ mt: 2 }}>
                <Typography
                    sx={{
                        mb: 1,
                        color: "#000",
                        fontWeight: 700,
                        fontSize: "14px",
                    }}
                >
                    Description
                </Typography>
                <DescriptionInputField placeholder="Enter course description" handleChange={(e) => setCourseDescription(e.target.value)} value={formData?.description} />
            </Box>
            {/* <Typography sx={{color:"red"}}>{error?.courseDescription}</Typography> */}

            <Box sx={{ mt: 2 }}>
                <Typography
                    sx={{
                        mb: 1,
                        color: "#000",
                        fontWeight: 700,
                        fontSize: "14px",
                    }}
                >
                    Type of Course
                </Typography>
                <FormControl sx={{ display: "flex" }}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={formData && formData.courseType}
                        name="radio-buttons-group"
                        sx={{
                            color: "#000",
                            display: "flex",
                            flexDirection: "row", // Align items horizontally
                            gap: "5px",
                            pl: "10px",
                            mb: 1,
                        }}
                    >
                        <FormControlLabel
                            value="Basic"
                            sx={{
                                border: "1px solid #D5DAE1",
                                paddingRight: " 15px",
                                borderRadius: "5px",
                            }}
                            control={
                                <Radio
                                    sx={{
                                        color: "#D5DAE1", // Color when unchecked
                                        "&.Mui-checked": {
                                            color: "#000", // Color when checked
                                        },
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
                                borderRadius: "5px",
                            }}
                            control={
                                <Radio
                                    sx={{
                                        color: "#D5DAE1",
                                        "&.Mui-checked": {
                                            color: "#000",
                                        },
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
                                borderRadius: "5px",
                            }}
                            value="Advance"
                            control={
                                <Radio
                                    sx={{
                                        color: "#D5DAE1",
                                        "&.Mui-checked": {
                                            color: "white",
                                        },
                                    }}
                                />
                            }
                            label="Advance"
                            onChange={(e) => setTypeOfCourse(e.target.value)}
                        />
                    </RadioGroup>
                </FormControl>
                {/* <Typography sx={{color:"red"}}>{error?.typeOfCourse}</Typography> */}
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography
                    sx={{
                        mb: 1,
                        color: "#000",
                        fontWeight: 700,
                        fontSize: "14px",
                    }}
                >
                    Select Language
                </Typography>
                {/* <SelectInputField courseDetail={true} handleChange={(e) => setSelectedLanguages(e.target.value)} value={formData && formData?.language} /> */}
            </Box>
            {/* <Typography sx={{ color: "red" }}>{error?.selectedLanguages}</Typography> */}
            <button style={{ background: "#6255FA", color: "#fff", padding: 10, borderRadius: 5, marginTop: 20 }}>Edit Course</button>
        </div>
    );
};

export default EditCourse;
