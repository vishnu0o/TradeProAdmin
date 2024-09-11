import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CoursePage from "./components/course/coursePage";
import CourseTabs from "./components/ReusableComponent/Tabs";
import SidebarComponent from "./components/ReusableComponent/Sidebar";
import Header from "./components/ReusableComponent/Header";
import { Box } from "@mui/material";
import ManageCoursePage from "./components/courseManagment/courseManagment";
import RefferalsPage from "./components/RefferalManagement/RefferalsPage";

function App() {
    const [isHover, setIsHover] = useState(true);

    const mouseOnEnter = () => {
        setIsHover(false);
    };
    const mouseOnLeave = () => {
        setIsHover(true);
    };
    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: isHover ? "80px 1fr" : "250px 1fr",
                        width: "100vw",
                        overflowX: "hidden",
                        transition: ".3s ease",
                    }}
                >
                    <Box
                        className="sideBar_box"
                        sx={{
                            width: "100%",
                        }}
                    >
                        <SidebarComponent mouseOnEnter={mouseOnEnter} mouseOnLeave={mouseOnLeave} isHover={isHover} />
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            minHeight: "100vh",
                            backgroundColor: "#f4f4f4",
                        }}
                    >
                        <Header />

                        <Routes>
                            <Route path="/login" element={<Login />} />
                            {/* <Route path="/home" element={<AdminPanel />} /> */}
                            <Route path="/" element={<CourseTabs />} />
                            <Route path="/course" element={<CoursePage />} />
                            <Route path="/courseManagment" element={<ManageCoursePage />} />
                            <Route path="/refferals" element={<RefferalsPage />} />
                        </Routes>
                    </Box>
                </Box>
            </BrowserRouter>
        </>
    );
}

export default App;
