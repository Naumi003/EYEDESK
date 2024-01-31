import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  RodDry: [
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
  },
});

export const { setRodDry } = todoslice.actions;

export default todoslice.reducer;
