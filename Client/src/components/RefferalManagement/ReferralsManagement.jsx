import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { CiEdit } from "react-icons/ci";
import AddLessonPopup from "../PopupComponents/AddLessonPopup";
import { useDispatch, useSelector } from "react-redux";
import { referralLevelFindAction } from "../../Redux/Action/referralAction";
import EditLessonPopup from "../PopupComponents/EditLessonPopup";

const ReferralsManagement = () => {
  const dispatch = useDispatch();
  const [openAddLesson, setOpenAddLesson] = useState(false);
  const [data, setData] = useState([]);

  // Reducers ::::::::::::

  let { referralLevelFindSuccess } = useSelector((state) => {
    return state.referralLevelFind;
  });

  useEffect(() => {
    dispatch(referralLevelFindAction());
  }, []);

  useEffect(() => {
    if (referralLevelFindSuccess) {
      setData(referralLevelFindSuccess?.data);
    }
  }, [referralLevelFindSuccess]);

  console.log(
    referralLevelFindSuccess,
    "referralLevelFindSuccessreferralLevelFindSuccess"
  );

  return (
    <>
      <Typography sx={{ fontWeight: 800, fontSize: "19px" }}>
        Referral Program Setup:
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{ fontSize: "14px", fontWeight: "700", mt: 2, mb: 0.8 }}
        >
          Levels
        </Typography>
        <Button
          onClick={() => setOpenAddLesson(true)}
          sx={{
            display: "inline-flex",
            background: "#231F20",
            textTransform: "capitalize",
            ml: "auto",
            mb: 1,
            "&:hover": {
              backgroundColor: "#231F20" // Maintain the same background color on hover
            }
          }}
          variant="contained"
        >
          <ClearAllIcon sx={{ mr: 1 }} />
          Add Levels
        </Button>
      </Box>

      {data?.map((value) => (
        <Box
          sx={{
            border: "1px solid #404F65",
            borderRadius: "4px",
            padding: "8px",
            mb: 1
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#404F65",
                mt: 2,
                mb: 0.8
              }}
            >
              {value?.Level}
            </Typography>
            <Box sx={{ display: "flex", ml: "auto", mt: 1.2 }}>
              <Typography
                sx={{
                  mr: 1,
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "black"
                }}
              >
                Edit
              </Typography>
              <CiEdit size={24} />
            </Box>
          </Box>
          <Typography
            // onClick={() => setOpenAddLesson(true)}
            sx={{
              display: "inline-flex",
              background: "#231F20",
              textTransform: "capitalize",
              color: "white",
              borderRadius: "5px",
              p: 1,
              ml: "auto",
              mb: 1,
              "&:hover": {
                backgroundColor: "#231F20" // Maintain the same background color on hover
              }
            }}
            variant="contained"
          >
            {value?.LevelCommission} Commission
          </Typography>
        </Box>
      ))}

      {/* <Box
        sx={{
          border: "1px solid #404F65",
          borderRadius: "4px",
          padding: "8px",
          mb: 1
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#404F65",
              mt: 2,
              mb: 0.8
            }}
          >
            Level 1
          </Typography>
          <Box sx={{ display: "flex", ml: "auto", mt: 1.2 }}>
            <Typography
              sx={{ mr: 1, fontSize: "16px", fontWeight: 500, color: "black" }}
            >
              Edit
            </Typography>
            <CiEdit size={24} />
          </Box>
        </Box>
        <Typography
          // onClick={() => setOpenAddLesson(true)}
          sx={{
            display: "inline-flex",
            background: "#231F20",
            textTransform: "capitalize",
            color: "white",
            borderRadius: "5px",
            p: 1,
            ml: "auto",
            mb: 1,
            "&:hover": {
              backgroundColor: "#231F20" // Maintain the same background color on hover
            }
          }}
          variant="contained"
        >
          30% Commission
        </Typography>
      </Box> */}

      <Typography sx={{ fontSize: "14px", fontWeight: "700", mt: 2, mb: 0.8 }}>
        Eligibility Criteria:
      </Typography>

      <Box
        sx={{
          border: "1px solid #D5DAE1",
          borderRadius: "4px",
          padding: "8px",
          mb: 1
        }}
      >
        <Typography
          sx={{ fontWeight: 400, fontSize: "16px", color: "#404F65", pl: 1 }}
        >
          Send an invite to a friend
        </Typography>
      </Box>

      <Box
        sx={{
          border: "1px solid #D5DAE1",
          borderRadius: "4px",
          padding: "8px",
          mb: 1
        }}
      >
        <Typography
          sx={{ fontWeight: 400, fontSize: "16px", color: "#404F65", pl: 1 }}
        >
          Your friend sign up.
        </Typography>
      </Box>

      <Box
        sx={{
          border: "1px solid #D5DAE1",
          borderRadius: "4px",
          padding: "8px",
          mb: 1
        }}
      >
        <Typography
          sx={{ fontWeight: 400, fontSize: "16px", color: "#404F65", pl: 1 }}
        >
          You’ll both get cash when your friend purchase course.
        </Typography>
      </Box>

      <AddLessonPopup
        openAddLesson={openAddLesson}
        setOpenAddLesson={setOpenAddLesson}
        lessonHeading={"Levels"}
        lessonSubHeading={"Add Level"}
        placeHolder={"Add Level Commision"}
      />

      <EditLessonPopup
        lesson={selectedLesson}
        openEditLesson={openEditLesson}
        setOpenEditLesson={setOpenEditLesson}
      />
    </>
  );
};

export default ReferralsManagement;
