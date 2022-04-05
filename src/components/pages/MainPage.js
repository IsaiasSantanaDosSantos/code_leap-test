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
          <Grid item sm={9} lg={9}>
            <p className={styles.network}>CodeLeap Network</p>
          </Grid>
          <Grid item sm={3} lg={3}>
            <ThemeProvider theme={theme}>
              <Button
                sx={{
                  color: "#fff",
                  background: "#000000",
                  borderRadius: "0",
                  width: "111px",
                  height: "33px",
                  marginTop: "20px",
                  marginRight: "32px",
                  float: "right",
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
        <div className={styles.contentContaiener}>
          <div>
            <p className={styles.salutation}>
              Hello, <span style={{}}>{name}</span>!
            </p>
          </div>
          <form className={styles.newForm}>
            <Container spacing={4}>
              <p>What's on your mind?</p>
              <StyledTextField
                fullWidth={true}
                variant="outlined"
                label="Title"
                name="name"
                placeholder="Hello world"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextareaAutosize
                fullWidth={true}
                aria-label="minimum height"
                minRows={8}
                placeholder="Content here"
                style={{
                  width: "100%",
                  marginTop: "20px",
                  background: "#FFFFFF",
                  border: "1px solid #777777",
                  boxSizing: "borderBox",
                  borderRadius: "4px",
                  padding: "10px",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "400px",
                  fontSize: "16px",
                  lineHeight: "16px",
                  color: "#000000",
                }}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <ThemeProvider theme={theme}>
                {title && content ? (
                  <Button
                    className={styles.btnLogin}
                    sx={{
                      color: "#fff",
                      background: "#000000",
                      borderRadius: "0",
                      width: "111px",
                      height: "33px",
                      marginTop: "20px",
                      float: "right",
                    }}
                    variant="contained"
                    color="primary"
                  >
                    create
                  </Button>
                ) : (
                  <Button
                    disabled={true}
                    className={styles.btnLogin}
                    sx={{
                      color: "#fff",
                      background: "#000000",
                      borderRadius: "0",
                      width: "111px",
                      height: "33px",
                      marginTop: "20px",
                      float: "right",
                    }}
                    variant="contained"
                    color="primary"
                  >
                    create
                  </Button>
                )}
              </ThemeProvider>
            </Container>
          </form>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
