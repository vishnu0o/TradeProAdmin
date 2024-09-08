import { Box, Button } from "@mui/material";
import { MdFormatListBulletedAdd } from "react-icons/md";

export const SubmitButton = ({
  title,
  submit,
  widthSize,
  heightSize,
  type,
  handleSubmit,
  component,
  bgColor,
  borderRadius
}) => {
  return (
    <Button
      type={submit}
      startIcon={component !=="addCourse"?<MdFormatListBulletedAdd />:""}
      onClick={type === "click" ? handleSubmit : null}
      sx={{
        width: widthSize,
        height: heightSize,
        color: "white",
        backgroundColor:bgColor?bgColor: "black",
        borderRadius:borderRadius?borderRadius: "8px",
        fontWeight: 600,
        fontSize: "12px",
        "&:hover": {
          backgroundColor: "black",
        }
      }}
    >
      {title}
    </Button>
  );
};
