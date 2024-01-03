// import { Grid3x3 } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import ButtonComp from "../../ButtonComp";
// import ButtonComp from "../MiniComp/ButtonComp";

function Button() {
  //   const [value, setValue] = useState("");
  //   const start = 0.0;
  //   const end = 25.0;
  //   const increment = 0.25;
  //   const numbersArray = [];

  //   for (let i = start; i <= end; i += increment) {
  //     numbersArray.push("+" + i.toFixed(2));
  //   }

  //   const onSet = (params) => {
  //     setValue(params);
  //   };
  const Array = [
    "Glaucoma",
    "Retinal Detachment",
    "Glass",
    "Eye Disease",
    "Eye Surgery",
    "Uveitis",
    "Retinal Laser",
  ];
  //   console.log(value);

  return (
    <>
      {/* <Grid container spacing={"0.1rem"}> */}
      {Array.map((key, i) => {
        return (
          <Grid item md={2} key={i}>
            <ButtonComp
              width={"100%"}
              // onClick={() => onSet(key)}
              label={key}
              color={"black"}
            />
          </Grid>
        );
      })}
      {/* </Grid> */}
    </>
  );
}

export default Button;
