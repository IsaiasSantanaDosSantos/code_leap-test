import { createSlice } from "@reduxjs/toolkit";

export const postListSlice = createSlice({
  name: "title",
  initialState: JSON.parse(localStorage.getItem("postList")) ?? [],
  reducers: {
    insertPost(state, { payload }) {
      localStorage.setItem("postList", JSON.stringify([...state, payload]));
      //state.push(payload)
      return [...state, payload];
    },
  },
});
//titlePost
export const { insertPost } = postListSlice.actions;

export const selectTitle = (state) => state.title;

export default postListSlice.reducer;
