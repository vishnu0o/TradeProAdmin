import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { IoNotificationsOutline } from "react-icons/io5";
import {
  Avatar,
  Button,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

const settings = ["Logout"];

export default function Header(props) {


  return (
    <>
        <>
          <Box
            sx={{
              backgroundColor: "white",
            }}
          >
            <AppBar
              position="static"
              sx={{
                backgroundColor: "#fff",
                height: "68px",
                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
              }}
              // elevation={1}
            >
              <Toolbar
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <Typography
                  noWrap
                  variant="h4"
                  component="a"
                  href="/"
                  sx={{
                    top: "32px",
                    Left: "142px",
                    ml: 12,
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 950,
                    fontSize: "30px",
                    color: "#1F56AE",
                    textDecoration: "none",
                    marginTop: "15px",
                    display: { md: "block", sm: "block", xs: "none" },
                    pl: !props.isHover && "120px",
                    width: "fit-content",
                  }}
                >
                  
                </Typography>
             
              </Toolbar>
            </AppBar>
          </Box>
        </>
    </>
  );
}
