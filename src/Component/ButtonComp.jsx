import { Button } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";

function ButtonComp({
  sx,
  label,
  onclick,
  backgroundColor = "white",
  color = "black",
  width = "auto",
  minwidth="0",
}) {
  return (
    <>
      <Button
        sx={{
          ...sx,
          backgroundColor: { backgroundColor },
          color: { color },
          width: { width },
          minWidth: { minwidth },

          "&:hover": {
            color: "white",
          },

          "&:active": {
            color: "white",
          },
        }}
        variant="contained"
        onClick={onclick}
      >
        {label}
      </Button>
    </>
  );
}

export default ButtonComp;
