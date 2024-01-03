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
    <Box sx={{  }}>
      <Box sx={{ paddingX: "1rem", paddingTop: "1rem", marginBottom: "15px" }}>
        <div
          style={{
            padding: "1rem",
          }}
        >
          {/* //   ---------{second container}//// */}
          <Drug />
          {/* Third container */}
          <Contact />
          <Food />
        </div>
      </Box>
    </Box>
  );
}

export default Allergies;
