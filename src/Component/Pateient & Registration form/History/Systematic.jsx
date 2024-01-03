import React, { useState } from 'react'
import { Box, Grid, TextField, Typography } from "@mui/material";

function Systematic() {
    const [input, setInput] = useState({
      index: 0,
      backgroundColor: "#1757C2",
      color: "white",
    });
    console.log(input);
  return (
    <>
      <Box sx={{ marginTop: "5px" }}>
        <Typography
          component="h4"
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#373737",
            marginBottom: "5px",
          }}
        >
          Systemic History
        </Typography>
        <Grid
          container
          sx={{
            backgroundColor: "white",
            border: "1px solid gray",
            display: "flex",
            marginTop: "5px",
          }}
          // paddingY={"2px"}
          rowSpacing={"0.5rem"}
        >
          <Grid
            item
            md={1.5}
            sm={1.3}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 8 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 8;
              setInput(current);
            }}
          >
            Diabetes
          </Grid>
          <Grid
            item
            md={1.5}
            sm={1.71}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              // letterSpacing: "-1px",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 9 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 9;
              setInput(current);
            }}
          >
            Hypertension
          </Grid>
          <Grid
            item
            md={1.5}
            sm={1.71}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 10 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 10;
              setInput(current);
            }}
          >
            Alcoholism
          </Grid>
          <Grid
            item
            md={2}
            sm={2.5}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 11 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 11;
              setInput(current);
            }}
          >
            Smoking Tobacco
          </Grid>
          <Grid
            item
            md={2}
            sm={2}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 12 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 12;
              setInput(current);
            }}
          >
            Cardiac Disorder
          </Grid>
          <Grid
            item
            md={2}
            sm={1.71}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 13 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 13;
              setInput(current);
            }}
          >
            Drug Abuse
          </Grid>
          <Grid
            item
            md={1.5}
            sm={1}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 14 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 14;
              setInput(current);
            }}
          >
            HIV/AIDS
          </Grid>
          <Grid
            item
            md={2}
            sm={2}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 15 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 15;
              setInput(current);
            }}
          >
            Cancer Tumor
          </Grid>
          <Grid
            item
            md={1.5}
            sm={2}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              // letterSpacing: "-1px",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 16 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 16;
              setInput(current);
            }}
          >
            Tuberculosis
          </Grid>
          <Grid
            item
            md={1.5}
            sm={1}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 17 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 17;
              setInput(current);
            }}
          >
            Asthma
          </Grid>
          <Grid
            item
            md={3}
            sm={3}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 18 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 18;
              setInput(current);
            }}
          >
            CNS Disorder Stroke
          </Grid>
          <Grid
            item
            md={2}
            sm={2}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 19 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 19;
              setInput(current);
            }}
          >
            Hyperthyroidism
          </Grid>
          <Grid
            item
            md={2}
            sm={2}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.40rem" },
              fontWeight: "600",
              textAlign: "center",
              //   borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 20 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 20;
              setInput(current);
            }}
          >
            Hepatitis Cirrhosis
          </Grid>
          <Grid
            item
            md={2}
            sm={2}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 21 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 21;
              setInput(current);
            }}
          >
            Renal Disorder
          </Grid>
          <Grid
            item
            md={1}
            sm={1}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              // letterSpacing: "-1px",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: input.index === 22 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 22;
              setInput(current);
            }}
          >
            Acidity
          </Grid>
          <Grid
            item
            md={2}
            sm={1.5}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 23 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 23;
              setInput(current);
            }}
          >
            On Insulin
          </Grid>
          <Grid
            item
            md={3}
            sm={3.5}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 24 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 24;
              setInput(current);
            }}
          >
            On Aspirin Blood Thinners
          </Grid>
          <Grid
            item
            md={2}
            sm={2}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 25 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 25;
              setInput(current);
            }}
          >
            Consanguinity
          </Grid>
          <Grid
            item
            md={2}
            sm={2}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              // borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 26 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 26;
              setInput(current);
            }}
          >
            Thyroid Disorder
          </Grid>
          <Grid
            item
            md={2}
            sm={3.5}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              // borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 27 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 27;
              setInput(current);
            }}
          >
            Chewing Tobacco
          </Grid>
          <Grid
            item
            md={3}
            sm={3.5}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              // borderBottom: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: input.index === 28 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 28;
              setInput(current);
            }}
          >
            Rheumatoid Arthritis
          </Grid>
          <Grid
            item
            md={4}
            sm={5}
            sx={{
              fontSize: { md: "0.75rem", sm: "0.50rem" },
              fontWeight: "600",
              textAlign: "center",
              borderRight: "1px solid gray",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: input.index === 29 && input.backgroundColor,
            }}
            onClick={() => {
              const current = { ...input };
              current.index = 29;
              setInput(current);
            }}
          >
            Benign Prostatic Hyperplasia ( BPH )
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          marginTop: "10px",
          // height:"10rem"
        }}
      >
        <TextField
          fullWidth
          label="History Comment"
          size="large"
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
        />
      </Box>
    </>
  );
}

export default Systematic