import { Box, Typography } from "@mui/material";
import React from "react";
2
function TopicUploadComponent({ img, title, type, handleClick }) {
  return (
    <>
        <Box
          sx={{
            position: "relative",
            cursor: "pointer",
            "&:hover > div:first-of-type": {
              opacity: 1,
            },
            width:"200px"

          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              background: "rgba(0, 0, 0,.1)",
              display: "flex",
              justifyContent: "end",
              padding: "16px",
              opacity: 0,
              transition: "0.5s ease",
            }}
          >
            <svg
              onClick={handleClick}
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.00605 0.666328C6.00608 0.489775 6.07621 0.320458 6.20103 0.195585C6.32584 0.0707123 6.49512 0.000499242 6.67167 0.000375L13.3275 0C13.5041 0.000409405 13.6733 0.0708169 13.7981 0.19579C13.9229 0.320764 13.993 0.490107 13.9931 0.666703V2.31281H6.00605V0.666328ZM16.9495 23.0465C16.9326 23.306 16.817 23.5493 16.6266 23.7264C16.4361 23.9036 16.1851 24.0013 15.925 23.9994H3.99764C3.73761 23.9987 3.48746 23.8997 3.29745 23.7222C3.10743 23.5447 2.9916 23.3018 2.97323 23.0424L1.95258 8.11191H18.0389L16.9498 23.0463L16.9495 23.0465ZM19.6012 6.75966H0.398438V5.21278C0.398723 4.80252 0.561803 4.40914 0.851871 4.11901C1.14194 3.82888 1.53529 3.66572 1.94555 3.66534L18.0539 3.66483C18.4641 3.66546 18.8573 3.82877 19.1473 4.11893C19.4373 4.40909 19.6004 4.80242 19.6007 5.21264V6.75952L19.6012 6.75966ZM6.90788 20.4402C6.90788 20.5289 6.92536 20.6169 6.95934 20.6989C6.99331 20.7809 7.04311 20.8554 7.10588 20.9182C7.16866 20.981 7.24318 21.0308 7.3252 21.0647C7.40722 21.0987 7.49513 21.1162 7.58391 21.1162C7.67268 21.1162 7.76059 21.0987 7.84261 21.0647C7.92463 21.0308 7.99916 20.981 8.06193 20.9182C8.12471 20.8554 8.1745 20.7809 8.20848 20.6989C8.24245 20.6169 8.25994 20.5289 8.25994 20.4402V10.9598C8.25852 10.7816 8.18671 10.611 8.06016 10.4855C7.9336 10.3599 7.76255 10.2894 7.58426 10.2893C7.40596 10.2892 7.23486 10.3596 7.10822 10.4851C6.98158 10.6106 6.90966 10.7811 6.90811 10.9594V20.4402H6.90788ZM11.7313 20.4402C11.7313 20.6195 11.8025 20.7915 11.9293 20.9183C12.0561 21.0451 12.2281 21.1163 12.4074 21.1163C12.5868 21.1163 12.7587 21.0451 12.8855 20.9183C13.0123 20.7915 13.0836 20.6195 13.0836 20.4402V10.9598C13.0821 10.7815 13.0103 10.611 12.8838 10.4854C12.7572 10.3598 12.5861 10.2893 12.4078 10.2892C12.2295 10.2891 12.0583 10.3595 11.9317 10.4851C11.805 10.6106 11.7331 10.7811 11.7315 10.9594L11.7313 20.4402Z"
                fill="#FC0005"
              />
            </svg>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              height: "134px",
              border: "1px solid rgba(239, 239, 239, 1)",
              borderBottom: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(239, 239, 239, 1)",
              width:"200px"
              
            }}
          >
            <img src={img ? img :title=="Thumbnail image"?"/imagePlaceHolder.png": "/TopicVideoPlaceholder.png"} width={100} height={100} />
          </Box>
          <Box
            sx={{
              border: "1px solid rgba(239, 239, 239, 1)",
              padding: "12px 16px 15px 16px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 2, // Limit the text to two lines
                textOverflow: "ellipsis",
                fontSize: "14px",
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
    </>
  );
}

export default TopicUploadComponent;
