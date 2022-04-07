import { createSlice } from "@reduxjs/toolkit";

export const postsContentSlice = createSlice(
  {
  name: "content",
  initialState: {
    name: "",
    isPosted: false,
  },
  reducers: {
    changePostsContent(state, { payload }) {
      return { ...state, isPosted: true, name: payload };
    },
  },
});

export const { changePostsContent } = postsContentSlice.actions;

export const selectPostsContent = (state) => state.content;

export default postsContentSlice.reducer;

