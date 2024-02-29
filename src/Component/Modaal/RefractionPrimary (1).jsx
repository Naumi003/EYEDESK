// *******sph positive and negative*******

import { Grid, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonComp from "../ButtonComp";
import TextFieldInp from "../Modaal/TextFieldInp";
import { useDispatch, useSelector } from "react-redux";
import {
  setIndicator,
  setPositiveRefraction,
  setRodDry,
} from "../../features/Todo/todoSlice";

export function SphPositiveMaping({ onclick }) {
  // const positiveRefraction = useSelector(
  //   (state) => state.todoReducer.positiveRefraction
  // );
  // console.log(positiveRefraction);
  const [value, setValue] = useState("");
  const start = 0.0;
  const end = 25.0;
  const increment = 0.25;
  const numbersArray = [];
  const prevInitialState = useSelector((state) => state.rodDry);
  // const values = [{sph : value1, cyl : value2, axis : value3}]

  for (let i = start; i <= end; i += increment) {
    numbersArray.push("+" + i.toFixed(2));
  }

  const onSet = (params) => {
    setValue(params);
    // dispatch(setRodDry());
  };

  return (
    <>
      <Grid container spacing={"0.17rem"}>
        {numbersArray.map((key, i) => {
          return (
            <Grid item md={0.705} sm={1} key={i}>
              <ButtonComp
                width={"100%"}
                onclick={() => onclick(key)}
                label={key}
                color={"black"}
                backgroundColor={"white"}
                // sx={{ backgroundColor: "white " }}
              />
              {/* onClick={handleClick} */}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export function SphNegativeMaping() {
  const [value, setValue] = useState("");
  const start = 0;
  const end = 25;
  const increment = 0.25;
  const numbersArray = [];

  for (let i = start; i <= end; i += increment) {
    numbersArray.push("-" + i.toFixed(2));
  }

  const onSet = (params) => {
    setValue(params);
  };

  console.log(value);

  return (
    <>
      <Grid container spacing={"0.1rem"}>
        {numbersArray.map((key, i) => {
          return (
            <Grid item md={0.63} key={i}>
              <ButtonComp
                width={"100%"}
                onClick={() => onSet(key)}
                label={key}
                color={"black"}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export function CylPositiveMaping() {
  const [value, setValue] = useState("");
  const start = 0;
  const end = 9.5;
  const increment = 0.25;
  const numbersArray = [];

  for (let i = start; i <= end; i += increment) {
    numbersArray.push("+" + i.toFixed(2));
  }

  const onSet = (params) => {
    setValue(params);
  };

  console.log(value);

  return (
    <>
      <Grid container spacing={"0.1rem"}>
        {numbersArray.map((key, i) => {
          return (
            <Grid item md={0.63} key={i}>
              <ButtonComp
                width={"100%"}
                onClick={() => onSet(key)}
                label={key}
                color={"black"}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export function CylNegativeMaping() {
  const [value, setValue] = useState("");
  const start = 0;
  const end = 9.5;
  const increment = 0.25;
  const numbersArray = [];

  for (let i = start; i <= end; i += increment) {
    numbersArray.push("-" + i.toFixed(2));
  }

  const onSet = (params) => {
    setValue(params);
  };

  console.log(value);

  return (
    <>
      <Grid container spacing={"0.1rem"}>
        {numbersArray.map((key, i) => {
          return (
            <Grid item md={0.63} key={i}>
              <ButtonComp
                width={"100%"}
                onClick={() => onSet(key)}
                label={key}
                color={"black"}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export function AxisMaping() {
  const [value, setValue] = useState("");
  const start = 5;
  const end = 180;
  const increment = 5;
  const numbersArray = [];

  for (let i = start; i <= end; i += increment) {
    numbersArray.push(i);
  }

  const onSet = (params) => {
    setValue(params);
  };

  console.log(value);

  return (
    <>
      <Grid container spacing={"0.1rem"}>
        {numbersArray.map((key, i) => {
          return (
            <Grid item md={0.63} key={i}>
              <ButtonComp
                width={"100%"}
                onClick={() => onSet(key)}
                label={key}
                color={"black"}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

// *********Ucva first and second button*******

export function UcvaFirstMaping() {
  const [value, setValue] = useState("");
  const [plus, setPlus] = useState("");

  const ucva = [
    "PL-",
    "PL+",
    "FL",
    "HM",
    "CFCF",
    "FC",
    "1/60",
    "2/60",
    "3/60",
    "4/60",
    "5/60",
    "6/60",
    "6/36",
    "6/24",
    "6/18",
    "6/12",
    "6/9",
    "6/7.5",
    "6/6",
    "6/5",
  ];

  const onSet = (params) => {
    setValue(params);
  };

  return (
    <>
      <Grid container spacing={"0.1rem"}>
        {ucva.map((key, i) => {
          return (
            <Grid item md={1.5} key={i}>
              <ButtonComp
                mdFontSize={"0.75rem"}
                backgroundColor={"white"}
                width={"100%"}
                minWidth={"0px"}
                onClick={() => onSet(key)}
                label={key}
                color={"black"}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export function UcvaSecondMaping() {
  const [value, setValue] = useState("");

  const ucvaSecond = [
    "N4",
    "N5",
    "N6",
    "N8",
    "N10",
    "N12",
    "N14",
    "N18",
    "N24",
    "N26",
    "N36",
    "<N36",
    "<6/60",
    "6/60",
    "6/36",
    "6/24",
    "6/18",
    "6/12",
    "6/9",
    "6/7.5",
    "6/6",
    "6/5",
  ];

  const onSet = (params) => {
    setValue(params);
  };

  return (
    <>
      <Grid container spacing={"0.1rem"}>
        {ucvaSecond.map((key, i) => {
          return (
            <Grid item md={1.5} key={i}>
              <ButtonComp
                mdFontSize={"0.75rem"}
                backgroundColor={"white"}
                width={"100%"}
                minWidth={"0px"}
                onClick={() => onSet(key)}
                label={key}
                color={"black"}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

// ********Four and Five Column inp Table********

export function FourColInpTable({ label, inpLabel, value }) {
  const dispatch = useDispatch();
  return (
    <>
      <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
        <Grid item md={12} sm={12}>
          <Grid container bgcolor={"#337eff"}>
            <Grid item md={3} sm={3}></Grid>
            <Grid item md={3} sm={3}>
              <Typography variant="subtitle1" fontWeight={600} color={"white"}>
                Sph
              </Typography>{" "}
            </Grid>
            <Grid item md={3} sm={3}>
              <Typography variant="subtitle1" fontWeight={600} color={"white"}>
                Cyl
              </Typography>{" "}
            </Grid>
            <Grid item md={3} sm={3}>
              <Typography variant="subtitle1" fontWeight={600} color={"white"}>
                Axis
              </Typography>{" "}
            </Grid>
          </Grid>
        </Grid>

        {value ? (
          value.map((key, i) => (
            <>
              <Grid item md={3} sm={3}>
                <TextFieldInp
                  backgroundColor={"transparent"}
                  label={i === 0 ? inpLabel : ""}
                  disabled={true}
                />
              </Grid>
              <Grid item md={3} sm={3}>
                <TextFieldInp
                  backgroundColor={"white"}
                  value={key?.sph}
                  oninput={() =>
                    dispatch(
                      setIndicator({
                        state:
                          label === "R" && inpLabel === "Dry"
                            ? "setRodDry"
                            : label === "R" && inpLabel === "Dilated"
                            ? "setRodDilated"
                            : label === "L" && inpLabel === "Dry"
                            ? "setLosDry"
                            : "setLosDilated",
                        index: i,
                        col: "sph",
                      })
                    )
                  }
                />
              </Grid>
              <Grid item md={3} sm={3}>
                <TextFieldInp
                  backgroundColor={"white"}
                  value={key?.cyl}
                  oninput={() =>
                    dispatch(
                      setIndicator({
                        state:
                          label === "R" && inpLabel === "Dry"
                            ? "setRodDry"
                            : label === "R" && inpLabel === "Dilated"
                            ? "setRodDilated"
                            : label === "L" && inpLabel === "Dry"
                            ? "setLosDry"
                            : "setLosDilated",
                        index: i,
                        col: "cyl",
                      })
                    )
                  }
                />
              </Grid>
              <Grid item md={3} sm={3}>
                <TextFieldInp
                  backgroundColor={"white"}
                  value={key?.axis}
                  oninput={() =>
                    dispatch(
                      setIndicator({
                        state:
                          label === "R" && inpLabel === "Dry"
                            ? "setRodDry"
                            : label === "R" && inpLabel === "Dilated"
                            ? "setRodDilated"
                            : label === "L" && inpLabel === "Dry"
                            ? "setLosDry"
                            : "setLosDilated",
                        index: i,
                        col: "axis",
                      })
                    )
                  }
                />
              </Grid>
            </>
          ))
        ) : (
          <>
            <Grid item md={3} sm={3}>
              <TextFieldInp
                backgroundColor={"transparent"}
                label={inpLabel}
                disabled={true}
              />
            </Grid>
            <Grid item md={3} sm={3}>
              <TextFieldInp backgroundColor={"white"} />
            </Grid>
            <Grid item md={3} sm={3}>
              <TextFieldInp backgroundColor={"white"} />
            </Grid>
            <Grid item md={3} sm={3}>
              <TextFieldInp backgroundColor={"white"} />
            </Grid>
          </>
        )}

        {/* <Grid item md={3} sm={3}>
          <TextFieldInp backgroundColor={"transparent"} />
        </Grid>
        <Grid item md={3} sm={3}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={3} sm={3}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={3} sm={3}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>

        <Grid item md={3} sm={3}>
          <TextFieldInp backgroundColor={"transparent"} />
        </Grid>
        <Grid item md={3} sm={3}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={3} sm={3}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={3} sm={3}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid> */}
      </Grid>
    </>
  );
}

export function FiveColInpTable({
  firstInpLabel,
  secondInpLabel,
  thirdInpLabel,
}) {
  return (
    <>
      <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
        <Grid item md={12}>
          <Grid container bgcolor={"#337eff"}>
            <Grid item md={2.4}></Grid>
            <Grid item md={2.4}>
              <Typography variant="subtitle1" fontWeight={600} color={"white"}>
                Sph
              </Typography>{" "}
            </Grid>
            <Grid item md={2.4}>
              <Typography variant="subtitle1" fontWeight={600} color={"white"}>
                Cyl
              </Typography>{" "}
            </Grid>
            <Grid item md={2.4}>
              <Typography variant="subtitle1" fontWeight={600} color={"white"}>
                Axis
              </Typography>{" "}
            </Grid>
            <Grid item md={2.4}>
              <Typography variant="subtitle1" fontWeight={600} color={"white"}>
                Vision
              </Typography>{" "}
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={2.4}>
          <TextFieldInp
            backgroundColor={"transparent"}
            label={firstInpLabel}
            disabled={true}
          />
        </Grid>
        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>

        <Grid item md={2.4}>
          <TextFieldInp
            backgroundColor={"transparent"}
            label={secondInpLabel}
          />
        </Grid>
        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>

        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"transparent"} label={thirdInpLabel} />
        </Grid>
        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
        <Grid item md={2.4}>
          <TextFieldInp backgroundColor={"white"} />
        </Grid>
      </Grid>
    </>
  );
}
