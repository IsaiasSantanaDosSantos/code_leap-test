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
    deletePost(state, { payload }) {
      const listWithPostDeleted = state.filter(
        (i) => i.idPost !== payload.idPost
      );
      localStorage.setItem("postList", JSON.stringify(listWithPostDeleted));
      return listWithPostDeleted;
    },
    updatePost(state, { payload }) {
      const listWithPostEdited = state.map((idPost) => {
        if (idPost.idPost === payload.idPost) {
          idPost.titlePost = payload.titlePost;
          idPost.postContent = payload.postContent;
        }
      });
    },
  },
});

export const { insertPost, deletePost, updatePost } = postListSlice.actions;

export const selectTitle = (state) => state.title;

export default postListSlice.reducer;
