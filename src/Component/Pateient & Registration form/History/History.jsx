import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Opthalmic from "./Opthalmic";
import Systematic from "./Systematic";
import Medical from "./Medical";
import Paeditric from "./Paeditric";

function History() {
  const [input, setInput] = useState({
    index: 0,
    backgroundColor: "#1757C2",
    color: "white",
  });
  console.log(input);
  return (
    <Box sx={{ borderRight: "1px solid black" }}>
      <Box sx={{ paddingX: "1rem", marginTop: "15px", marginBottom: "15px" }}>
        <Opthalmic />
        <Systematic />
        <Medical/>
        <Paeditric/>
      </Box>
    </Box>
  );
}

export default History;
