import { Button } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";

function ButtonComp({
  sx,
  label,
  onClick,
}) {
  return (
    <>
      <Button
        sx={sx}
        variant="contained"
        // onClick={onClick}
      >
        {label}
      </Button>
    </>
  );
}

export default ButtonComp;
