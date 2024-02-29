import { Box, Grid, Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
import { Drugbutton } from "../Pateient & Registration form/Allergies/Allergiesbutton";
import Button from "@mui/material/Button";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import Appreance from "./Appreance";
import Injuiry from "./Injuiry";
import Conjuctiva from "./Conjuctiva";
import Appendages from "./Appendages";
import Sclera from "./Sclera";
import Cornea from "./Cornea";
import AnteriorChamber from "./AnteriorChamber";
import Pupil from "./Pupil";
import Iris from "./Iris";
import Lens from "./Lens";
import Extraocular from "./Extraocular";
import RemoveIcon from "@mui/icons-material/Remove";
import Intraculor from "./Intraculor";
import Gonioscopy from "./Gonioscopy";
import Fundus from "./Fundus";
import Buttonup from "../Pateient & Registration form/OtherDetails/Buttonup";
import { compose } from "@reduxjs/toolkit";

function NewPatientButton() {
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const title = [
    { heading: "Appearance", component: <Appreance /> },
    { heading: "Injury", component: <Injuiry /> },
    // "injuiry"?
    { heading: "Appendages", component: <Appendages /> },
    { heading: "conjuctiva", component: <Conjuctiva /> },
    { heading: "sclera", component: <Sclera /> },
    { heading: "corena", component: <Cornea /> },
    { heading: "anterior chamber", component: <AnteriorChamber /> },
    { heading: "pupil", component: <Pupil /> },
    { heading: "Iris", component: <Iris /> },
    { heading: "lens", component: <Lens /> },
    { heading: "Extraocular", component: <Extraocular /> },
    { heading: "intraocular pressure", component: <Intraculor /> },
    { heading: "gonioscopy", component: <Gonioscopy /> },
    { heading: "fundus", component: <Fundus /> },
  ];

  const [alignment, setAlignment] = React.useState(
    title.map((key) => ({
      isLeft: false,
      isRight: false,
      title: key?.heading,
      component: key?.component,
    }))
  );

  console.log(alignment);

  const [buttonStates, setButtonStates] = useState(
    Array(28).fill(true) // Array to keep track of button states, initially all set to true
  );
  console.log(buttonStates);

  const handleClick = (index, position) => {
    console.log(index);
    // setIcon(!icon);
    const newButtonStates = [...alignment];
    newButtonStates[index][position] = !newButtonStates[index][position];
    console.log(newButtonStates);
    setAlignment(newButtonStates);
  };

  return (
    <Grid
      container
      marginTop={"10px"}
      columnSpacing={1}
      // bgcolor={"#f5cfd252"}
      // sx={{ display: "flex", textAlign: "center", justifyContent: "center" }}
    >
      <Grid item md={12} sm={12}>
        {alignment.map((key, i) => (
          <>
            <Grid container>
              <Grid item md={0.65} sm={1.1}>
                <Button
                  variant="contained"
                  sx={{ height: "21px", padding: "13px", marginBottom: "10px" }}
                  size="small"
                  onClick={() => handleClick(i, "isLeft")}
                >
                  {key?.isLeft ? <RemoveIcon /> : <AddCircleOutlineSharpIcon />}
                </Button>
              </Grid>

              <Grid item md={10.7} sm={10}>
                <ImmunizationButton
                fontWeight={"bold"}
                  padding={"4px"}
                  // paddingX={"10px"}
                  borderRadius={"20px"}
                  // width={"100%"}
                  Array={[key?.title]}
                  // sx={{ display: "flex", textAlign: "center", justifyContent: "center" }}
                  // onclick={() => handleClick(0)}
                />
              </Grid>

              <Grid item md={0.5} sm={0.8}>
                <Button
                  variant="contained"
                  sx={{ height: "21px", padding: "13px" }}
                  size="small"
                  onClick={() => handleClick(i, "isRight")}
                >
                  {key?.isRight ? (
                    <RemoveIcon />
                  ) : (
                    <AddCircleOutlineSharpIcon />
                  )}
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={6} sm={6} sx={{ width: "100%" }}>
                {key?.isLeft && (
                  <Box
                    sx={{
                      width: "100%",
                      bgcolor: "#1cff001f ",
                      borderRadius: "1rem",
                    }}
                  >
                    {key?.component}
                  </Box>
                )}
              </Grid>
              <Grid item md={6} sm={6} sx={{ width: "100%" }}>
                {key?.isRight && (
                  <Box
                    sx={{
                      width: "100%",
                      bgcolor: "#f5cfd252 ",
                      borderRadius: "1rem",
                    }}
                  >
                    {key?.component}
                  </Box>
                )}
              </Grid>
            </Grid>
          </>
        ))}
      </Grid>
    </Grid>
  );
}
export default NewPatientButton;
