import {
  Container,
  Button,
  createTheme,
  inputLabelClasses,
  outlinedInputClasses,
  TextField,
  Grid,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styled from "@emotion/styled";
import React, { useState } from "react";

import styles from "./MainPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/User";
import { useNavigate } from "react-router-dom";
import NewForm from "./NewForm";
import Posts from "./Posts"

const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "#777777",
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "#777777",
    },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "#000000",
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
    {
      color: "#777777",
    },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "#000000",
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "#000000",
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#000000",
  },
});

function MainPage() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const { name } = useSelector(selectUser);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fffff",
      },
    },
  });

  function logoutMainPage() {
    dispatch(logout());
    navigator("/login");
  }

  // Faltar ajustar a responsividade do botão de logout
  return (
    <div className={styles.body}>
      <div className={styles.container} justifyContent="center">
        <Grid container className={styles.informations}>
          <Grid item  xs={8} sm={9}>
            <p className={styles.network}>CodeLeap Network</p>
          </Grid>
          <Grid item xs={4} sm={3}>
            <ThemeProvider theme={theme}>
              <Button
              className={styles.btnLogout}
                sx={{
                  color: "#fff",
                  background: "#000000",
                  borderRadius: "0",
                  width: "111px",
                  height: "33px",
                  marginTop: "20px",
                  marginLeft: "-10px",
                  border: "1px solid #fff",
                }}
                variant="contained"
                color="primary"
                onClick={logoutMainPage}
              >
                logout
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Container spacing={3} className={styles.contentContaiener}>
          <div>
            <p className={styles.salutation}>
              Hello, <span >{name}</span>!
            </p>
          </div>
          <NewForm />
          <Posts />
        </Container>
      </div>
    </div>
  );
}
export default MainPage;
