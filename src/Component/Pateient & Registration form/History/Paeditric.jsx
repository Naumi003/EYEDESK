import React, { useState } from 'react'
import { Box, Grid, TextField, Typography } from "@mui/material";

function Paeditric() {
     const [input, setInput] = useState({
       index: 0,
       backgroundColor: "#1757C2",
       color: "white",
     });
     console.log(input);
  return (
    <>
      <Box>
        <Typography
          component="h4"
          sx={{
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          Paediatric History
        </Typography>
        <Grid container sx={{ marginTop: "10px" }}>
          <Grid item md={4} sm={4}>
            Nutrition Assessment:
          </Grid>
          <Grid item md={8} sm={8}>
            <Grid container sx={{ backgroundColor: "white" }}>
              <Grid
                item
                md={3}
                sm={3}
                sx={{
                  fontSize: { md: "0.75rem", sm: "0.50rem" },
                  fontWeight: "600",
                  textAlign: "center",
                  borderRight: "1px solid gray",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  backgroundColor: input.index === 30 && input.backgroundColor,
                }}
                onClick={() => {
                  const current = { ...input };
                  current.index = 30;
                  setInput(current);
                }}
              >
                Malnourished
              </Grid>
              <Grid
                item
                md={3}
                sm={4}
                sx={{
                  fontSize: { md: "0.75rem", sm: "0.50rem" },
                  fontWeight: "600",
                  textAlign: "center",
                  // letterSpacing: "-1px",
                  borderRight: "1px solid gray",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  backgroundColor: input.index === 31 && input.backgroundColor,
                }}
                onClick={() => {
                  const current = { ...input };
                  current.index = 31;
                  setInput(current);
                }}
              >
                Well Nourished
              </Grid>
              <Grid
                item
                md={3}
                sm={3}
                sx={{
                  fontSize: { md: "0.75rem", sm: "0.5rem" },
                  fontWeight: "600",
                  textAlign: "center",
                  borderRight: "1px solid gray",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  backgroundColor: input.index === 32 && input.backgroundColor,
                }}
                onClick={() => {
                  const current = { ...input };
                  current.index = 32;
                  setInput(current);
                }}
              >
                Over Weight
              </Grid>
              <Grid
                item
                md={3}
                sm={2}
                sx={{
                  // fontSize: "0.9rem",
                  fontSize: { md: "0.75rem", sm: "0.50rem" },
                  fontWeight: "600",
                  textAlign: "center",
                  borderRight: "1px solid gray",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  backgroundColor: input.index === 33 && input.backgroundColor,
                }}
                onClick={() => {
                  const current = { ...input };
                  current.index = 33;
                  setInput(current);
                }}
              >
                Obese
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginTop={"10px"}>
          <Grid item md={4} sm={4}>
            <Typography
              component="h4"
              sx={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Comments:
            </Typography>
          </Grid>
          <Grid item md={8} sm={8}>
            <Box sx={{ width: "100%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                // label="History Comment"
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container marginTop={"10px"}>
          <Grid item md={4} sm={6}>
            <Typography
              component="h4"
              sx={{
                fontSize: "16px",
                // marginTop: "10px",
              }}
            >
              Immunization Assesment:
            </Typography>
          </Grid>
          <Grid item md={8} sm={6}>
            <Grid container>
              <Grid
                item
                md={2}
                sm={6}
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  textAlign: "center",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                  borderTop: "1px solid gray",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                }}
              >
                Complete
              </Grid>
              <Grid
                item
                md={2}
                sm={6}
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                  borderTop: "1px solid gray",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  textAlign: "center",
                }}
              >
                Pending
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginTop={"10px"}>
          <Grid item md={4} sm={4}>
            <Typography
              component="h4"
              sx={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Comments:
            </Typography>
          </Grid>
          <Grid item md={8} sm={8}>
            <Box sx={{ width: "100%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                // label="History Comment"
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Paeditric