import React from "react";
import ReactDOM from "react-dom";
import "./Index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
