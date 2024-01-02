import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
//   height: "100px",
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
//   width: "100%",
  //   textAlign:"center"
});

export default function Buttonup() {
  return (
    <Button
      sx={{ textAlign: "center",height:"100%" }}
      component="label"
      variant="contained"
      //   startIcon={<CloudUploadIcon />}
    >
      Upload Here
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}
