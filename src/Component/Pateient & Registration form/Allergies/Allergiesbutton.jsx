import { Grid } from "@mui/material";
import React from "react";
import ButtonComp from "../../ButtonComp";

export function Drugbutton() {
  const Array = [
    "Antimicrobial Agents",
    "Antifungal Agents",
    "Antiviral Agents",
    "Nsaids",
    "Eye Drops",
  ];
  return (
    <>
      {Array.map((key, i) => {
        return (
          <Grid item key={i}>
            <ButtonComp
              label={key}
              sx={{
                width: "auto",
                fontSize: "10px",
                height: "100%",
                bgcolor: "white",
                color: "black",
                borderRadius: "0%",
                border: "1px solid gray",
              }}
            />
          </Grid>
        );
      })}
    </>
  );
}

export function Contactbutton() {
  const Array = [
    "Alcohol",
    "latex",
    "Betadine",
    "Adhesive Tape",
    "Tegaderm",
    "Transpore",
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
            />
          </Grid>
        );
      })}
    </>
  );
}

export function Foodbutton() {
  const Array = [
    "All Seafood",
    "corn",
    "Egg",
    "Milk Protiens",
    "Peanuts",
    "Shellfish Only",
    "Soy Protien",
    "Lactose",
    "Mushroom",
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
            />
          </Grid>
        );
      })}
    </>
  );
}
