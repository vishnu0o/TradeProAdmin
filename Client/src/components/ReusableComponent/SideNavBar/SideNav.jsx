import React, { useEffect, useState } from "react";
import { Avatar, Box, createTheme, ThemeProvider } from "@mui/material";
import {
  SidebarContainer,
  SidebarMenuContainer,
  StyledNavLink,
  LogoContainer,
  LogoOut
} from "./SideElement.jsx";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";

import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SidebarComponent from "../Sidebar.jsx";

const Sidebar = ({ mouseOnEnter, mouseOnLeave, isHover }) => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(null);
  const [items, setItems] = useState([
    "DashBoard",
    "Course",
    "Referral Managment"
  ]);

  const [pages, setPages] = useState([
    "Home",
    "Leads",
    "deals",
    "enrolled",
    "approval",
    "DocumentUpload",
    "Partner",
    "Administration",
    "Application",
    "university",
    "Tickets",
    "Enquiry",
    "landingPage",
    "Ielts",
    "hrManagment",
    "Accounts",
    "ReferAndEarn",
    "Settings"
  ]);

  useEffect(() => {
    setItems(["DashBoard", "Course", "Referral Managment"]);
    setPages([
      "Home",
      "Leads",
      "deals",
      "enrolled",
      "approval",
      "DocumentUpload",
      "Partner",
      "Administration",
      "Application",
      "university",
      "Tickets",
      "Enquiry",
      "landingPage",
      "Ielts",
      "hrManagment",
      "Accounts",
      "ReferAndEarn",
      "Settings"
    ]);
  });

  const toggleClass = (index) => {
    setActive(index);
  };

  // theme Provider
  let theme = createTheme({
    width: "auto",
    palette: {
      primary: {
        main: "#0052cc"
      },
      secondary: {
        main: "#edf2ff"
      }
    }
  });

  theme = createTheme(theme, {
    palette: {
      info: {
        main: theme.palette.secondary.main
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <SidebarContainer
        act={isHover}
        onMouseEnter={mouseOnEnter}
        onMouseLeave={mouseOnLeave}
      >
        <SidebarComponent/>
           {/* <LogoOut> */}
            {/* <i className="bx bx-bookmark nav_icon" />
              <Avatar
                alt="GSL"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              /> */}
          {/* </LogoOut> */}
      </SidebarContainer>
    </ThemeProvider>
  );
};
export default Sidebar;
