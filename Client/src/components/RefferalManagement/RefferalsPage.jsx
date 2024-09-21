import React, { useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Grid,
  FormLabel,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReferralsAnalytics from "./ReferralsAnalytics";
import ReferralsManagement from "./ReferralsManagement";

const RefferalsPage = () => {
  const dispatch = useDispatch();

  const [selectedRefferalsItem, setSelectedRefferalsItem] = useState(null);

  const location = useLocation();

  const refferalsItems = [
    { name: "Referrals Analytics" },
    { name: "Referrals Management" }
  ];

  useEffect(() => {
    setSelectedRefferalsItem(refferalsItems[0]);
  }, []);

  return (
    <div
      style={{
        padding: "20px 30px",
        display: "flex",
        flexDirection: "column",
        gap: 10
      }}
    >
      <div style={{ display: "flex", gap: 5 }}>
        <img src="./home.svg" alt="img" />
        <p style={{ textTransform: "capitalize", color: "#7D8995" }}>
          {location.pathname}
        </p>
      </div>

      <Grid container gap={0} width={"100%"}>
        {/* Sidebar */}
        <Grid item xs={12} sm={3} md={3} style={{ paddingRight: 10 }}>
          <div
            style={{ backgroundColor: "#fff", borderRadius: 10, padding: 20 }}
          >
            <h1 style={{ fontSize: 20, fontWeight: "bold" }}>Referrals</h1>
            <List>
              {refferalsItems.map((item, index) => (
                <ListItem
                  key={item.name}
                  onClick={() =>
                    setSelectedRefferalsItem(refferalsItems[index])
                  }
                  sx={{
                    border:
                      selectedRefferalsItem?.name === item.name
                        ? "2px solid #6255FA"
                        : "2px solid #000",
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
                    backgroundColor:
                      selectedRefferalsItem?.name === item.name
                        ? "#6255FA"
                        : "transparent",
                    "& .MuiListItemIcon-root": {
                      color:
                        selectedRefferalsItem?.name === item.name
                          ? "#fff"
                          : "#000"
                    },
                    "& .MuiListItemText-root": {
                      color:
                        selectedRefferalsItem?.name === item.name
                          ? "#fff"
                          : "#000"
                    },
                    "&:hover": {
                      backgroundColor: "#6255FA",
                      color: "#fff",
                      border: "2px solid #6255FA",
                      "& .MuiListItemIcon-root": {
                        color: "#fff"
                      },
                      "& .MuiListItemText-root": {
                        color: "#fff"
                      }
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "#000",
                      minWidth: "0"
                    }}
                  >
                    <ClearAllIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "11px",
                        fontWeight: 700,
                        fontFamily: "inherit",
                        transition: ".3s ease"
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} sm={9} md={9} style={{ paddingLeft: 10 }}>
          <div
            style={{ backgroundColor: "#fff", borderRadius: 10, padding: 20 }}
          >
            {selectedRefferalsItem?.name === refferalsItems[0].name ? (
              <ReferralsAnalytics />
            ) : selectedRefferalsItem?.name === refferalsItems[1].name ? (
              <ReferralsManagement />
            ) : null}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RefferalsPage;
