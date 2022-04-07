import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice(
  {
    name: "user",
    initialState: {
      name: "",
      isLogged: false,
    },
    reducers: {
      changeUser(state, { payload }) {
        return { ...state, isLogged: true, name: payload };
      },
      logout(state) {
        return { ...state, isLogged: false, name: "" };
      },
    },
  }
  /*{
    titlePost: "title",
    initialState: {
      titlePost: "",
    },
    reducer: {
      changeUser(state, { payload }) {
        return { ...state, isPosted: true, titlePost: payload };
      },
    },
  }*/
);

/*
titlePost;
postContent
 */

export const { changeUser, logout } = slice.actions;
//export const { changeTitle } = slice.actions;

export const selectUser = (state) => state.user;
//export const selectTitle = (state) => state.title;

export default slice.reducer;
