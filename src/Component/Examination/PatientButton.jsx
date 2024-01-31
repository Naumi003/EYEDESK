import { Grid } from "@mui/material";
import React, { useState } from "react";
import { ImmunizationButton } from "../Pateient & Registration form/History/Button";
import Drug from "../Pateient & Registration form/Allergies/Drug";
import { Drugbutton } from "../Pateient & Registration form/Allergies/Allergiesbutton";

function PatientButton() {
  const [buttonStates, setButtonStates] = useState(
    Array(13).fill(true) // Array to keep track of button states, initially all set to true
  );
  console.log(buttonStates);

  const handleClick = (index) => {
    const newButtonStates = [...buttonStates];
    newButtonStates[index] = !newButtonStates[index];
    setButtonStates(newButtonStates);
  };

  return (
    <>
      <Grid container marginTop={"10px"}>
        <Grid item md={5}>
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["APPEARANCE"]}
            onclick={() => handleClick(0)}
          />
          {buttonStates[0] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["INJURY"]}
            onclick={() => handleClick(1)}
          />
          {buttonStates[1] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["APPENDEGES"]}
            onclick={() => handleClick(2)}
          />
          {buttonStates[2] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["CONJUCTIVA"]}
            onclick={() => handleClick(3)}
          />
          {buttonStates[3] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["SCLERA"]}
            onclick={() => handleClick(4)}
          />
          {buttonStates[4] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["CORNEA"]}
            onclick={() => handleClick(5)}
          />
          {buttonStates[5] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["ANTERIOR CHAMBER(AC)"]}
            onclick={() => handleClick(6)}
          />
          {buttonStates[6] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["PUPILI"]}
            onclick={() => handleClick(7)}
          />
          {buttonStates[7] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["IRIS"]}
            onclick={() => handleClick(8)}
          />
          {buttonStates[8] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["LENS"]}
            onclick={() => handleClick(9)}
          />
          {buttonStates[9] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["EXTRAOCULAR MOVEMENT &SQUINT"]}
            onclick={() => handleClick(10)}
          />
          {buttonStates[10] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["INTRAOCULAR PRESSURE(IOP)"]}
            onclick={() => handleClick(11)}
          />
          {buttonStates[11] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["GONIOSCOPY"]}
            onclick={() => handleClick(12)}
          />
          {buttonStates[12] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
          <ImmunizationButton
            padding={"0px"}
            width={"100%"}
            Array={["FUNDUS"]}
            onclick={() => handleClick(13)}
          />
          {buttonStates[13] ? null : (
            <div>
              <Drugbutton />
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default PatientButton;
