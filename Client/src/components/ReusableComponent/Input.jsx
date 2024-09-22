import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import * as React from "react";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

export default function InputField({
  label,
  handleChange,
  value,
  bgcolor,
  color
}) {
  return (
    <>
      <TextField
        id="filled-basic"
        //   label={label}
        variant="filled"
        placeholder={label}
        sx={{
          bgcolor: bgcolor ? bgcolor : "#3F3F46",
          width: "100%",
          borderRadius: "5px",
          "& .MuiInputBase-input": {
            bgcolor: bgcolor ? bgcolor : "#3F3F46",
            padding: "14px",
            color: color ? color : "#E4E4E7"
          },
          "& .MuiInputLabel-root": {
            color: "#E4E4E7"
          },
          "& .MuiFilledInput-underline:before": {
            borderBottom: "none" // Removes the underline before focus
          },
          "& .MuiFilledInput-underline:after": {
            borderBottom: "none" // Removes the underline after focus
          },
          "& .MuiFilledInput-root": {
            borderRadius: "4px", // Ensure the corners are rounded if needed
            "&:hover:not(.Mui-disabled):before": {
              borderBottom: "none" // Removes underline on hover
            }
          }
        }}
        onChange={handleChange}
        value={value}
      />
    </>
  );
}

export const DescriptionInputField = ({ placeholder, handleChange, value }) => {
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75"
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025"
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : "#000"};
    background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    // border: 1px solid ${
      theme.palette.mode === "dark" ? grey[700] : grey[200]
    };
    // box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

   


    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );

  return (
    <Textarea
      aria-label="minimum height"
      minRows={6}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};

export const SelectInputField = ({ handleChange, value }) => {
  return (
    <>
      <FormControl
        variant="filled"
        sx={{
          // minWidth: 120,
          backgroundColor: "#3F3F46",
          width: "100%",
          borderRadius: "4px",
          color: "#fff",

          "& .MuiFilledInput-root": {
            backgroundColor: "#3F3F46",
            color: "#fff",
            "&:before": {
              color: "#fff",
              borderBottom: "none" // Remove underline before focus
            },
            "&:after": {
              color: "#fff",
              borderBottom: "none"
              // Remove underline after focus
            },
            "&:hover:not(.Mui-disabled):before": {
              color: "#fff",
              borderBottom: "none" // Remove underline on hover
            }
          }
        }}
      >
        <InputLabel
          id="demo-simple-select-filled-label"
          sx={{ color: "#E4E4E7" }}
        >
          Select language
        </InputLabel>

        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          multiple
          placeholder="Select language"
          value={value}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"English"}>English</MenuItem>
          <MenuItem value={"Hindi"}>Hindi</MenuItem>
          <MenuItem value={"Malayalam"}>Malayalam</MenuItem>
          <MenuItem value={"Tamil"}>Tamil</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
