import React from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import { BsBell } from "react-icons/bs";

const Header = () => {
  return (
    <Box className="bg-white shadow-md h-[98px] flex items-center px-4 static">
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: 500,
          color: "#556987"
        }}
      >
        Hi,
      </Typography>
      <span className="text-[27px] font-sans font-medium ml-2">John Doe</span>
      <Box className="ml-auto flex mr-3">
        <IconButton aria-label="notifications" sx={{ mr: 2 }}>
          <BsBell size={30} color="black" />
        </IconButton>
        <Avatar alt="Remy Sharp" src="./avatar.png" />
      </Box>
    </Box>
  );
};

export default Header;
