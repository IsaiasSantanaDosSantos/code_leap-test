import {
  Container,
  Button,
  createTheme,
  inputLabelClasses,
  outlinedInputClasses,
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styled from "@emotion/styled";
import React, { useState } from "react";

import styles from "./MainPage.module.css";

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

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fffff",
      },
    },
  });

  return (
    <div className={styles.body}>
      <div className={styles.container} justifyContent="center">
        <div className={styles.informations}>
          <p className={styles.network}>CodeLeap Network</p>
        </div>
        <div className={styles.contentContaiener}>
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
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "#CCCCCC",
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
