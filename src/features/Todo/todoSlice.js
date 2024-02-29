import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  RodDry: [
    {
      sph: "",
      cyl: "",
      axis: "",
    },
    {
      sph: "",
      cyl: "",
      axis: "",
    },
    {
      sph: "",
      cyl: "",
      axis: "",
    },
  ],
  rodDilated: [
    {
      sph: "",
      cyl: "",
      Axis: "",
    },
    {
      sph: "",
      cyl: "",
      Axis: "",
    },
    {
      sph: "",
      cyl: "",
      Axis: "",
    },
  ],
  losDry: [
    {
      sph: "",
      cyl: "",
      Axis: "",
    },
    {
      sph: "",
      cyl: "",
      Axis: "",
    },
    {
      sph: "",
      cyl: "",
      Axis: "",
    },
  ],
  losDilated: [
    {
      sph: "",
      cyl: "",
      Axis: "",
    },
    {
      sph: "",
      cyl: "",
      Axis: "",
    },
    {
      sph: "",
      cyl: "",
      Axis: "",
    },
  ],
  indicator: {
    state: "setRodDry",
    index: 0,
    col: 'sph'
  },
};
console.log(initialState.RodDry);

export const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setRodDry: (state, action) => {
      state.RodDry = action.payload;
      console.log(action.payload);
      // console.log(state.positiveRefraction);
    },
    setRodDilated: (state, action) => {
      state.rodDilated = action.payload;
      console.log(action.payload);
      // console.log(state.positiveRefraction);
    },
    setLosDry: (state, action) => {
      state.losDry = action.payload;
      console.log(action.payload);
      // console.log(state.positiveRefraction);
    },
    setLosDilated: (state, action) => {
      state.losDilated = action.payload;
      console.log(action.payload);
      // console.log(state.positiveRefraction);
    },
    setIndicator: (state, action) => {
      state.indicator = action.payload;
    },
  },
});

export const { setRodDry, setRodDilated, setLosDry, setLosDilated, setIndicator } = todoslice.actions;

export default todoslice.reducer;
