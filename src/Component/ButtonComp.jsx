import { Button } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";

function ButtonComp({
  label,
  width,
  borderRadius,
  fontSize,
  fontWeight,
  color,
  onClick,
}) {
  return (
    <>
      {/* <Button  sx={{width:{width}, borderRadius:{borderRadius}, fontSize:{fontSize}, }} variant="contained">{label}</Button> */}
      <Button
        sx={{
          width: { width },
          borderRadius: { borderRadius },
          fontSize: { fontSize },
          height: "100%",
          fontWeight: { fontWeight },
          bgcolor: "white",
          color: { color },

          //   clipPath: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)'
        }}
     
        variant="contained"
        onClick={onClick}
      >
        {label}
      </Button>
    </>
  );
}

export default ButtonComp;
