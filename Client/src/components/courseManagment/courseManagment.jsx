import React, { useState } from "react";
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
  FormControl
} from "@mui/material";
import TopicUploadComponent from "../ReusableComponent/TopicUploadComponent";
import InputField, { SelectInputField } from "../ReusableComponent/Input";

const ManageCoursePage = () => {
  const [title, setTitle] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [previewVideo, setUploadPreview] = useState();
  const [courseAuthor, setCourseAuthor] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [typeOfCourse, setTypeOfCourse] = useState("Basic");
  const [error, setError] = useState({});
  return (
    <Grid container>
      {/* Sidebar */}
      <Grid item xs={12} sm={3} md={3}></Grid>

      {/* Main Content */}
      <Grid item xs={12} sm={9} md={9}>
        
      </Grid>
    </Grid>
  );
};

export default ManageCoursePage;
