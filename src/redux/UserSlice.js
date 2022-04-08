import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    name: localStorage.getItem("name") ?? "",
    isLogged: localStorage.getItem("isLogged") ?? false,
  },
  reducers: {
    changeUser(state, { payload }) {
      localStorage.setItem("name", payload)
      localStorage.setItem("isLogged", "true")
      state.isLogged = true;
      state.name = payload;
    },
    logout(state) {
      localStorage.setItem("name", "")
      localStorage.setItem("isLogged", false)
      state.isLogged = false;
      state.name = "";
    },
  },
});

export const { changeUser, logout } = slice.actions;

export const selectUser = (state) => state.user;

export default slice.reducer;
