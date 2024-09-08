import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import { SidebarContainer } from "./SideNavBar/SideElement";
import { useNavigate } from "react-router-dom";

const SidebarComponent = ({ mouseOnEnter, mouseOnLeave, isHover }) => {
  const navigate = useNavigate()
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const menuItems = [
    { id: 1, text: "Dashboard", icon: <DashboardIcon />,url:"/"},
    { id: 2, text: "Course", icon: <SchoolIcon /> ,url:"/course"},
    { id: 3, text: "Referral Management", icon: <PeopleIcon /> ,url:"/course"},
  ];

  const logoutItem = { id: 4, text: "Log Out", icon: <LogoutIcon /> };

  return (
    <SidebarContainer
      act={isHover}
      onMouseEnter={mouseOnEnter}
      onMouseLeave={mouseOnLeave}
    >
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "black",
            width: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "fixed"
          }
        }}
      >
        <Box>
          <Box sx={{ display: "flex", mt: 7, mb: 4 }}>
            <Box
              component="img"
              src="./Logo.png"
              sx={{
                width: 44,
                height: 44
              }}
            />
            <Box sx={{ color: "white", ml: 2 }}>
              <Typography sx={{ fontWeight: 800, fontSize: "18px" }}>
                TRADEPRO
              </Typography>
              <Typography
                sx={{ textAlign: "center", fontWeight: 200, fontSize: "15px" }}
              >
                ACADEMY
              </Typography>
            </Box>
          </Box>

          <Divider
            sx={{
              borderColor: "#EBEBEB",
              borderWidth: 1,
              opacity: 0.5,
              ml: 2,
              mr: 2,
              mb: 1
            }}
          />

          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.id}
                style={{
                  color: hoveredItem === item.id ? "black" : "white",
                  backgroundColor: hoveredItem === item.id ? "white" : "black",
                  borderRadius: hoveredItem === item.id ? "10px" : "0", // Apply borderRadius on hover
                  transition: "all 0.3s ease",
                  marginBottom: "12px "
                }}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave()}
                onClick={()=>navigate(item?.url)}
              >
                <ListItemIcon
                  sx={{
                    color: hoveredItem === item.id ? "black" : "white"
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    fontFamily: "inherit",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "17.07px"
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <List sx={{ mb: 2 }}>
          <ListItem
            style={{
              color: hoveredItem === logoutItem.id ? "black" : "white",
              backgroundColor:
                hoveredItem === logoutItem.id ? "white" : "black",
              borderRadius: hoveredItem === logoutItem.id ? "10px" : "0", // Apply borderRadius on hover
              transition: "all 0.3s ease" // Smooth transition,
            }}
            onMouseEnter={() => handleMouseEnter(logoutItem.id)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <ListItemIcon
              sx={{
                color: hoveredItem === logoutItem.id ? "black" : "white"
              }}
            >
              {logoutItem.icon}
            </ListItemIcon>
            <ListItemText
              primary={logoutItem.text}
              sx={{
                fontFamily: "inherit",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17.07px"
              }}
            />
          </ListItem>
        </List>
      </Drawer>
    </SidebarContainer>
  );
};

export default SidebarComponent;
