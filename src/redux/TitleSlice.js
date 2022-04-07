import { createSlice } from "@reduxjs/toolkit";

export const createTitle = createSlice(
  {
  name: "title",
  initialState: {
    name: "",
    isPosted: false,
  },
  reducers: {
    changeTitle(state, { payload }) {
      return { ...state, isPosted: true, name: payload };
    },
  },
});

export const { changeTitle } = createTitle.actions;

export const selectTitle = (state) => state.title;

export default createTitle.reducer;

