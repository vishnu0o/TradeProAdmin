import { Grid, Typography } from "@mui/material";
import React from "react";

const ReferralsAnalytics = () => {
  return (
    <div>
      <Typography sx={{ fontWeight: 800, fontSize: "19px" }}>Referrals Analytics</Typography>

      <Typography sx={{ fontSize: "14px", fontWeight: "700", mt: 2, mb: 0.8 }}>Real-Time Referral Activity:</Typography>
      <Grid
        container
        gap={{ xs: 1, md: 2 }}
        sx={{
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          md
          sx={{
            bgcolor: "#EBEBEB",
            p: "20px 10px",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontWeight: "550", fontSize: "13px", color: "#556987", lineHeight: "normal", textTransform: "uppercase" }}>New Referrals</Typography>
          <Typography sx={{ lineHeight: "normal", fontSize: "35px", fontWeight: "700" }}>3</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md
          sx={{
            bgcolor: "#EBEBEB",
            p: "20px 10px",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontWeight: "550", fontSize: "13px", color: "#556987", lineHeight: "normal", textTransform: "uppercase" }}>Referral Conversion Rate</Typography>
          <Typography sx={{ fontSize: "35px", lineHeight: "normal", fontWeight: "700" }}>3.3%</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md
          sx={{
            bgcolor: "#EBEBEB",
            p: "20px 10px",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontWeight: "550", fontSize: "13px", color: "#556987", lineHeight: "normal", textTransform: "uppercase" }}>Active Referrals</Typography>
          <Typography sx={{ fontSize: "35px", lineHeight: "normal", fontWeight: "700" }}>3</Typography>
        </Grid>
      </Grid>

      <Typography sx={{ fontSize: "14px", fontWeight: "700", mt: 2, mb: 0.8 }}>Real-Time Commission Earnings:</Typography>
      <Grid
        container
        gap={{ xs: 1, md: 2 }}
        sx={{
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          md
          sx={{
            bgcolor: "#EBEBEB",
            p: "20px 10px",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontWeight: "550", fontSize: "13px", color: "#556987", lineHeight: "normal", textTransform: "uppercase" }}>Top Earners</Typography>
          <Typography sx={{ p: "0px", lineHeight: "normal", fontSize: "35px", fontWeight: "700" }}>₹380 </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md
          sx={{
            bgcolor: "#EBEBEB",
            p: "20px 10px",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontWeight: "550", fontSize: "13px", color: "#556987", lineHeight: "normal", textTransform: "uppercase" }}>Todays Payout Commission </Typography>
          <Typography sx={{ fontSize: "35px", lineHeight: "normal", fontWeight: "700" }}>₹150</Typography>
        </Grid>
      </Grid>

      <Typography sx={{ fontSize: "14px", fontWeight: "700", mt: 2, mb: 0.8 }}>Real-Time User Engagement:</Typography>
      <Grid
        container
        gap={{ xs: 1, md: 2 }}
        sx={{
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          md
          sx={{
            bgcolor: "#EBEBEB",
            p: "20px 10px",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontWeight: "550", fontSize: "13px", color: "#556987", lineHeight: "normal", textTransform: "uppercase" }}>Referral Link Click-Throughs</Typography>
          <Typography sx={{ p: "0px", lineHeight: "normal", fontSize: "35px", fontWeight: "700" }}>₹4000 </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md
          sx={{
            bgcolor: "#EBEBEB",
            p: "20px 10px",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontWeight: "550", fontSize: "13px", color: "#556987", lineHeight: "normal", textTransform: "uppercase" }}>Active Sessions</Typography>
          <Typography sx={{ fontSize: "35px", lineHeight: "normal", fontWeight: "700" }}>₹350</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReferralsAnalytics;
