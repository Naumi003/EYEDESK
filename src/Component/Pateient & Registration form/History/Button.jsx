// import { Grid3x3 } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import ButtonComp from "../../ButtonComp";
// import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
// import ButtonComp from "../MiniComp/ButtonComp";

export function OpthalmicButton() {
  const Array = [
    "Glaucoma",
    "Retinal Detachment",
    "Glass",
    "Eye Disease",
    "Eye Surgery",
    "Uveitis",
    "Retinal Laser",
  ];

  return (
    <>
      {Array.map((key, i) => {
        return (
          <Grid item key={i}>
            <ButtonComp
              sx={{
                width: "auto",
                fontSize: "10px",
                height: "100%",
                bgcolor: "white",
                color: "black",
                borderRadius: "0%",
                border: "1px solid gray",
              }}
              label={key}
              // onClick=
            />
          </Grid>
        );
      })}
    </>
  );
}

export function SystemicButton() {
  const Array = [
    "Diabetes",
    "Hypertension",
    "Alcoholism",
    "Smoking Tobacco",
    "Cardiac Disorder",
    "Drug Abuse",
    "HIV/AIDS",
    "Cancer Tumor",
    "Tuberculosis",
    "Asthma",
    "CNS Disorder Stroke",
    "Hypothyroidism",
    "Hepatitis Cirrhosis",
    "Renal Disorder",
    "Acidity",
    "On Insulin",
    "On Aspirin Blood Thinners",
    "Consanguinity",
    "Thyroid Disorder",
    "Chewing Tobacco",
    "Rheumatoid Arthritis",
    "Benign Prostatic Hyperplasia ( BPH )",
  ];

  return (
    <>
      {Array.map((key, i) => {
        return (
          <Grid item key={i} sx={{ marginTop: "0.05rem" }}>
            <ButtonComp
              sx={{
                width: "auto",
                fontSize: "10px",
                height: "100%",
                bgcolor: "white",
                color: "black",
                borderRadius: "0%",
                border: "1px solid gray",
              }}
              label={key}
            />
          </Grid>
        );
      })}
    </>
  );
}

export function NutritionalButton() {
  const Array = ["Malnourished", "Well Nourished", "Over Weight", "Obese"];

  return (
    <>
      {Array.map((key, i) => {
        return (
          <Grid item key={i} sx={{ marginTop: "0.05rem" }}>
            <ButtonComp
              sx={{
                width: "auto",
                fontSize: "10px",
                height: "100%",
                bgcolor: "white",
                color: "black",
                borderRadius: "0%",
                border: "1px solid gray",
              }}
              label={key}
            />
          </Grid>
        );
      })}
    </>
  );
}

export function ImmunizationButton({
  Array,
  padding,
  onclick,
  bgcolor,
  borderRadius,
  display,
  textAlign,
  justifyContent,
  minwidth,
  fontWeight,
}) {
  return (
    <>
      {Array.map((key, i) => {
        return (
          <>
            {/* <button onClick={onclick} style={{ padding }}>
              {Array.join(", ")}
            </button> */}
            <Grid item key={i} sx={{ marginTop: "0.05rem" }}>
              <ButtonComp
                width={"100%"}
                sx={{
                  fontSize: "10px",
                  // height: "auto",
                  color: "white",
                  borderRadius: { borderRadius },
                  border: "1px solid gray",
                  padding: { padding },
                  bgcolor: { bgcolor },
                  display: { display },
                  textAlign: { textAlign },
                  justifyContent: { justifyContent },
                  minwidth: { minwidth },
                  fontWeight: { fontWeight },
                }}
                label={key}
                onclick={() => onclick(key)}
              />
            </Grid>
          </>
        );
      })}
    </>
  );
}
