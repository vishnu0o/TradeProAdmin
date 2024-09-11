import React, { useEffect, useState } from "react";
import { Drawer, Box, Typography, Button, TextField, RadioGroup, FormControlLabel, Radio, Select, MenuItem, Grid, FormLabel, FormControl, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import TopicUploadComponent from "../ReusableComponent/TopicUploadComponent";
import InputField, { SelectInputField } from "../ReusableComponent/Input";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { useLocation } from "react-router-dom";
import { courseFindAction } from "../../Redux/Action/courseAction";
import { useDispatch, useSelector } from "react-redux";
import ReferralsAnalytics from "./ReferralsAnalytics";
import ReferralsManagement from "./ReferralsManagement";
// import EditCourse from "./editCourse.jsx";
// import Lessons from "./Lessons.jsx";
// import Certificates from "./Certificates.jsx";

const RefferalsPage = () => {
    const dispatch = useDispatch();

    // const [openAddLesson, setOpenAddLesson] = useState(false);

    // const [selectedCourse, setSelectedCourse] = useState({});
    const [selectedRefferalsItem, setSelectedRefferalsItem] = useState(null);

    const location = useLocation();

    // console.log({ selectedCourse });
    // console.log({ selectedRefferalsItem });

    const refferalsItems = [{ name: "Referrals Analytics" }, { name: "Referrals Management" }];

    // let { courseFindSuccess } = useSelector((state) => {
    //     return state.courseFind;
    // });

    useEffect(() => {
        // dispatch(courseFindAction());
        setSelectedRefferalsItem(refferalsItems[0]);
    }, []);

    // useEffect(() => {
    //     if (courseFindSuccess) {
    //         setSelectedCourse(courseFindSuccess?.data.find((item) => item._id === id));
    //     }
    // }, [courseFindSuccess]);
    return (
        <div style={{ padding: "20px 30px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", gap: 5 }}>
                <img src="./home.svg" alt="img" />
                <p style={{ color: "#7D8995" }}>{location.pathname}</p>
            </div>

            <Grid container gap={0} width={"100%"}>
                {/* Sidebar */}
                <Grid item xs={12} sm={3} md={3} style={{ paddingRight: 10 }}>
                    <div style={{ backgroundColor: "#fff", borderRadius: 10, padding: 20 }}>
                        <h1 style={{ fontSize: 20, fontWeight: "bold" }}>Referrals</h1>
                        <List>
                            {refferalsItems.map((item, index) => (
                                <ListItem
                                    key={item.name}
                                    onClick={() => setSelectedRefferalsItem(refferalsItems[index])}
                                    sx={{
                                        border: selectedRefferalsItem?.name === item.name ? "2px solid #6255FA" : "2px solid #000", // Purple border when selected
                                        borderRadius: "6px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "10px",
                                        padding: "10px",
                                        width: "100%",
                                        cursor: "pointer",
                                        marginTop: 2,
                                        transition: "all 0.3s ease",
                                        backgroundColor: selectedRefferalsItem?.name === item.name ? "#6255FA" : "transparent", // Purple background if selected
                                        "& .MuiListItemIcon-root": {
                                            color: selectedRefferalsItem?.name === item.name ? "#fff" : "#000", // Icon color: white if selected, black otherwise
                                        },
                                        "& .MuiListItemText-root": {
                                            color: selectedRefferalsItem?.name === item.name ? "#fff" : "#000", // Text color: white if selected, black otherwise
                                        },
                                        "&:hover": {
                                            backgroundColor: "#6255FA",
                                            color: "#fff",
                                            border: "2px solid #6255FA",
                                            "& .MuiListItemIcon-root": {
                                                color: "#fff",
                                            },
                                            "& .MuiListItemText-root": {
                                                color: "#fff",
                                            },
                                        },
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            color: "#000",
                                            minWidth: "0",
                                        }}
                                    >
                                        <ClearAllIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.name}
                                        primaryTypographyProps={{
                                            sx: {
                                                fontSize: "11px", // Set your desired font size here
                                                fontWeight: 700, // You can also apply fontWeight here if necessary
                                                //   color: "#000",
                                                fontFamily: "inherit",
                                                transition: ".3s ease",
                                            },
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Grid>

                {/* Main Content */}
                <Grid item xs={12} sm={9} md={9} style={{ paddingLeft: 10 }}>
                    <div style={{ backgroundColor: "#fff", borderRadius: 10, padding: 20 }}>{selectedRefferalsItem?.name === refferalsItems[0].name ? <ReferralsAnalytics /> : selectedRefferalsItem?.name === refferalsItems[1].name ? <ReferralsManagement /> : null}</div>
                </Grid>
            </Grid>
        </div>
    );
};

export default RefferalsPage;
