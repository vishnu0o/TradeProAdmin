import { Divider, FormLabel, Typography } from "@mui/material";
import React, { useState } from "react";

const Certificates = () => {
  const [certificateTemplate, setCertificateTemplate] = useState();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ background: "#fff", borderRadius: "10px", padding: "20px" }}>
        <Typography sx={{ fontWeight: "600", mb: 2 }}>Upload Certificate Templete</Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <FormLabel
            sx={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: "20px",
              width: "100%",
              cursor: "pointer",
            }}
          >
            {certificateTemplate && (
              <img
                style={{
                  width: "250px",
                  height: "140px",
                  borderRadius: "10px",
                  border: "none",
                }}
                src={typeof certificateTemplate === "string" ? certificateTemplate : certificateTemplate && URL.createObjectURL(certificateTemplate)}
                alt=""
              />
            )}
            <Typography
              sx={{
                color: "#E4E4E7",
                fontWeight: 500,
                fontSize: "17px",
                lineHeight: "24px",
                backgroundColor: "#6255FA",
                padding: "10px 30px",
                borderRadius: "10px",
              }}
            >
              Upload Template
            </Typography>
            <input type="file" hidden name="certificateTemplate" onChange={(e) => setCertificateTemplate(e.target.files[0])} accept=".png, .jpg, .jpeg, .gif, image/*" />
          </FormLabel>
        </div>
      </div>
      <div style={{ background: "#fff", borderRadius: "10px", padding: "20px" }}>
        <Typography sx={{ fontWeight: "600", mb: 2 }}>Certificate Pending Approval</Typography>
        <div
          style={{
            background: "#000",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ fontSize: "15px" }}>Sam Joseph</Typography>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              style={{
                background: "#16A34A",
                color: "#fff",
                padding: " 10px",
                borderRadius: "5px",
              }}
            >
              Approve Certificate
            </button>
            <Typography sx={{ fontSize: "15px" }}>View Profile</Typography>
          </div>
        </div>
        <Divider
          sx={{
            borderColor: "#D5DAE1",
            borderWidth: ".1px",
            opacity: 1,
            mb: 1.5,
            mt: 1.5,
          }}
        />
        <div
          style={{
            background: "#000",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ fontSize: "15px" }}>Sam Joseph</Typography>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              style={{
                background: "#16A34A",
                color: "#fff",
                padding: " 10px",
                borderRadius: "5px",
              }}
            >
              Approve Certificate
            </button>
            <Typography sx={{ fontSize: "15px" }}>View Profile</Typography>
          </div>
        </div>
        <Divider
          sx={{
            borderColor: "#D5DAE1",
            borderWidth: ".1px",
            opacity: 1,
            mb: 1.5,
            mt: 1.5,
          }}
        />
        <div
          style={{
            background: "#000",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ fontSize: "15px" }}>Sam Joseph</Typography>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              style={{
                background: "#16A34A",
                color: "#fff",
                padding: " 10px",
                borderRadius: "5px",
              }}
            >
              Approve Certificate
            </button>
            <Typography sx={{ fontSize: "15px" }}>View Profile</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
