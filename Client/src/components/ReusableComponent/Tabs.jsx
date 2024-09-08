import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const CourseTabs = () => {
  // const data = [
  //   {
  //     label: "COURSE ENROLMENT NUMBERS",
  //     value: 3,
  //     iconSrc: "./dashBoardIcon.svg",
  //     iconBg: "#FBE9E7"
  //   },
  //   {
  //     label: "TOTAL REVENUE",
  //     value: 0,
  //     iconSrc: "./dashBoardIcon.svg",
  //     iconBg: "#E3F2FD"
  //   },
  //   {
  //     label: "TOTAL PAYOUT",
  //     value: 0,
  //     iconSrc:"./dashBoardIcon.svg",
  //     iconBg: "#EDE7F6"
  //   },
  //   {
  //     label: "ACTIVE USERS",
  //     value: 0,
  //     iconSrc: "./dashBoardIcon.svg",
  //     iconBg: "#E8F5E9"
  //   },
  //   {
  //     label: "COURSE SALES",
  //     value: 0,
  //     iconSrc:"./dashBoardIcon.svg",
  //     iconBg: "#E8F5E9"
  //   }
  // ];
  return (
    <>
    
        <Grid container spacing={2} sx={{ mt: 3,ml:1 }}>
            <Grid item xs={12} sm={6} md={2.5}>
              <Box
                sx={{
                  bgcolor: "white",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#FEF5E7",
                    width: 49,
                    height: 49,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%"
                  }}
                >
                  <img src="./dashBoardIcon.svg" alt="img" />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "15px", color: "#556987", fontWeight: 600 }}
                  >
                     ENROLLED STUDENTS
                  </Typography>
                  <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                    3
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Box
                sx={{
                  bgcolor: "white",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#EBEDEF",
                    width: 49,
                    height: 49,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%"
                  }}
                >
                  <img src="./totalRevenu.svg" alt="img" />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "15px", color: "#556987", fontWeight: 600 }}
                  >
                     TOTAL REVENU
                  </Typography>
                  <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                    0
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Box
                sx={{
                  bgcolor: "white",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#EBF3FE",
                    width: 49,
                    height: 49,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%"
                  }}
                >
                  <img src="./totalPayout.svg" alt="img" />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "15px", color: "#556987", fontWeight: 600 }}
                  >
                     TOTAL PAYOUT
                  </Typography>
                  <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                    3
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Box
                sx={{
                  bgcolor: "white",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#EBF3FE",
                    width: 49,
                    height: 49,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%"
                  }}
                >
                  <img src="./activeUser.svg" alt="img" />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "15px", color: "#556987", fontWeight: 600 }}
                  >
                     ACTIVE USER
                  </Typography>
                  <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                    3
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Box
                sx={{
                  bgcolor: "white",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#DCFCE7",
                    width: 49,
                    height: 49,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%"
                  }}
                >
                  <img src="./courseSales.svg" alt="img" />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "15px", color: "#556987", fontWeight: 600 }}
                  >
                     COURSE SALE
                  </Typography>
                  <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                    0
                  </Typography>
                </Box>
              </Box>
            </Grid>
        </Grid>
      {/* <Grid
        sx={{
          display: "flex",
          mt: 3,
          ml: 3,
          bgcolor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px"
        }}
      >
        <Box
          sx={{
            bgcolor: "#FEF5E7",
            width: 44,
            height: 44,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "28px"
          }}
        >
          <img src="./dashBoardIcon.svg" alt="" />
        </Box>
      </Grid> */}
    </>
    // <Box borderBottom={1} borderColor="divider">
    //   <Tabs value={0} indicatorColor="primary">
    //     <Tab label="All" />
    //     <Tab label="Basic Course" />
    //     <Tab label="Advance" />
    //   </Tabs>
    // </Box>
  );
};

export default CourseTabs;
