import React, { useEffect, useState } from "react";
import { SubmitButton } from "../ReusableComponent/Button";
import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import TableNoItemComponent from "../ReusableComponent/TableNoItemComponent";
import Dialogue from "../ReusableComponent/Dialogue";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { COURSE_CREATE_SUCCESS } from "../../Redux/Constants/courseConstants";
import { courseFindAction } from "../../Redux/Action/courseAction";
import { useNavigate } from "react-router-dom";

function CoursePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [course, setCouse] = useState([]);

    // Reducers ::::::::::::::::::::::

    let { courseCreateSuccess } = useSelector((state) => {
        return state.courseCreate;
    });

    let { courseFindSuccess } = useSelector((state) => {
        return state.courseFind;
    });

    // Actions :::::::::::::::::::::::

    useEffect(() => {
        dispatch(courseFindAction());
    }, []);

    useEffect(() => {
        if (courseFindSuccess) {
            setCouse(courseFindSuccess?.data);
        }
    }, [courseFindSuccess]);

    useEffect(() => {
        if (courseCreateSuccess) {
            Swal.fire("Created!", "Course is created.", "success");
            dispatch({ type: COURSE_CREATE_SUCCESS, payload: false });
        }
    }, [dispatch]);

    console.log(courseFindSuccess, "courseFindSuccess");
    return (
        <>
            <Box sx={{ mt: 2 ,ml:2 }}>
                <SubmitButton title="Create New Course" submit="" widthSize="209px" heightSize="48px" type="click" handleSubmit={() => setOpen(true)} />
                <Box sx={{ padding: "24px" }}>
                    {/* Course Cards */}
                    <Grid container spacing={3}>
                        {course?.map((value) => (
                            <Grid item xs={12} md={4}>
                                <Card
                                    sx={{
                                        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "12px",
                                        padding: "16px",
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="subtitle2" color="textSecondary">
                                            {value?.courseType}
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                            {value?.title}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                color: "#6610f2",
                                                borderColor: "#6610f2",
                                                textTransform: "none",
                                                "&:hover": {
                                                    borderColor: "#6610f2",
                                                    backgroundColor: "rgba(102, 16, 242, 0.04)",
                                                },
                                            }}
                                            onClick={() => navigate("/courseManagment")}
                                        >
                                            Manage Course
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}

                        {/* Card 2 */}
                        {/* <Grid item xs={12} md={4}>
                            <Card
                                sx={{
                                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "12px",
                                    padding: "16px",
                                }}
                            >
                                <CardContent>
                                    <Typography variant="subtitle2" color="textSecondary">
                                        Advance
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                        Master the Stock Market: Complete Trading Course
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: "#6610f2",
                                            borderColor: "#6610f2",
                                            textTransform: "none",
                                            "&:hover": {
                                                borderColor: "#6610f2",
                                                backgroundColor: "rgba(102, 16, 242, 0.04)",
                                            },
                                        }}
                                    >
                                        Manage Course
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid> */}
                    </Grid>
                </Box>
                {/* {course.length === 0 && <TableNoItemComponent />} */}
            </Box>

            {open && <Dialogue open={open} handleClose={() => setOpen(false)} />}
        </>
    );
}

export default CoursePage;
