import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputField, { DescriptionInputField } from "../ReusableComponent/Input";

const EditCourse = ({ selectedCourse }) => {
    const [formData, setFormData] = useState(null);
    console.log({ formData });

    useEffect(() => {
        setFormData(selectedCourse);
    }, [selectedCourse]);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: "14px", color: "#556987", fontWeight: "bold" }}>{formData?.courseType}</p>
            <h1 style={{ fontSize: "22px", fontWeight: "bold" }}>{formData?.title}</h1>

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
                    fontSize: "14px"
                  }}
                >
                  Description
                </Typography>
                <DescriptionInputField
                  placeholder="Enter course description"
                  handleChange={(e) => setCourseDescription(e.target.value)}
                  value={formData?.description}
                  
                />
              </Box>
              {/* <Typography sx={{color:"red"}}>{error?.courseDescription}</Typography> */}

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
                    defaultValue={formData?.courseType}
                    name="radio-buttons-group"
                    sx={{
                      color: "#000",
                      display: "flex",
                      flexDirection: "row" // Align items horizontally
                    }}
                  >
                    <FormControlLabel
                      value="Basic"
                      sx={{
                        border:"1px solid #D5DAE1",
                        paddingRight:" 15px",
                        borderRadius:"5px"
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
                        border:"1px solid #D5DAE1",
                        paddingRight:" 15px",
                        borderRadius:"5px"
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
                            border:"1px solid #D5DAE1",
                            paddingRight:" 15px",
                            borderRadius:"5px"
                        }}
                      value="Advance"

                      control={
                        <Radio
                          sx={{
                            color: "#D5DAE1",
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
              {/* <Typography sx={{color:"red"}}>{error?.typeOfCourse}</Typography> */}

              </Box>
        </div>
    );
};

export default EditCourse;
