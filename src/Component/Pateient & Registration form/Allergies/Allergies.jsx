import { Box, Grid, Input, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Drug from "./Drug";
import Contact from "./Contact";
import Food from "./Food";

function Allergies() {
  const [input, setInput] = useState({
    index: 0,
    backgroundColor: "#1757C2",
    color: "white",
  });

  return (
    <Box sx={{ borderRight: "1px solid black" }}>
      <Box sx={{ paddingX: "1rem", marginTop: "15px", marginBottom: "15px" }}>
       <Drug/>
        {/* //   ---------{second container}//// */}
       <Contact/>
        {/* Third container */}
        <Food/>
      </Box>
    </Box>
  );
}

export default Allergies;
