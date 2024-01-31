import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  FourColInpTable,
  SphNegativeMaping,
  SphPositiveMaping,
} from "./RefractionPrimary (1)";
import Rod from "../Examination/Rod";
import {
  ImmunizationButton,
  SystemicButton,
} from "../Pateient & Registration form/History/Button";
import { Drugbutton } from "../Pateient & Registration form/Allergies/Allergiesbutton";
import { useSelector } from "react-redux";


function Refraction(onclick) {
  const [reflectedContent, setReflectedContent] = useState(null);
  const RodDry = useSelector((state) => state.todoReducer.RodDry);
  const losDry = useSelector((state) => state.todoReducer.losDry);
  const rodDilated = useSelector((state) => state.todoReducer.rodDilated);
  const losDilated = useSelector((state) => state.todoReducer.losDilated);
    console.log(RodDry);
  const handleButtonClick = (content) => {
    setReflectedContent((prevContent) =>
      prevContent === content ? null : content
    );
  };

  return (
    <>
      <Box>
        <Grid>
          <Grid item md={12}>
            <Typography
              component="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                fontSize: "1rem",
                borderBottom: "1px solid black",
              }}
            >
              AUTO REFRACTION
            </Typography>
          </Grid>
        </Grid>
        <Grid container columnSpacing={"1rem"} paddingX={"0.5rem"}>
          <Grid item md={6} sm={6}>
            <Rod label={"R/OD"} isBtn={false} />
            <FourColInpTable inpLabel={"Dry"} value={RodDry} />
            <FourColInpTable inpLabel={"Dilated"} value={rodDilated} />
          </Grid>
          <Grid item md={6} sm={6}>
            <Rod label={"L/OS"} array={""} isBtn={false} />
            <FourColInpTable
              inpLabel={"Dry"}
              value={losDry}
              // inpLabel={"positiveRefraction.toString()"}
            />
            {/* <FourColInpTable inpLabel={setPositiveRefraction.toString()} /> */}
            <FourColInpTable inpLabel={"Dilated"} value={losDilated} />
          </Grid>
        </Grid>
        <Grid container paddingX={"0.5rem"} marginTop={"10px"}>
          <Grid item md={6} sm={6} display={"flex"} flexDirection={"row"}>
            <ImmunizationButton
              Array={["plus"]}
              padding={"0px"}
              bgcolor={reflectedContent === 1 ? "#222" : "white"}
              onclick={() => handleButtonClick(1)}
            />
            <ImmunizationButton
              Array={["minus"]}
              padding={"0px"}
              bgcolor={reflectedContent === 2 ? "#222" : "white"}
              onclick={() => handleButtonClick(2)}
            />
          </Grid>
          <Grid item md={4} sm={4}>
            <Box width={"6rem"}>
              <ImmunizationButton Array={["Right=Left"]} />
            </Box>
          </Grid>
          <Grid item md={2} sm={2} display={"flex"} flexDirection={"row"}>
            <ImmunizationButton
              Array={["Previous"]}
              padding={"0px"}
              // onclick={() => handleButtonClick(3)}
            />
            <ImmunizationButton
              Array={["Next"]}
              padding={"0px"}
              // onclick={() => handleButtonClick(3)}
            />
          </Grid>
        </Grid>
        {reflectedContent === null ? null : reflectedContent === 1 ? (
          <Grid container marginTop={"10px"} paddingX={"0.5rem"}>
            <SphPositiveMaping />
          </Grid>
        ) : (
          <Grid container marginTop={"10px"} paddingX={"0.5rem"}>
            <SphNegativeMaping />
            <></>
          </Grid>
        )}
      </Box>
    </>
  );
}

export default Refraction;
