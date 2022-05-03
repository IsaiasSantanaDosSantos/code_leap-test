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
import { useDispatch, useSelector } from "react-redux";
import { insertPost } from "../../redux/postListSlice";

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

function NewForm() {
  const loggedUserName = useSelector((state) => state.user.name);
  const [titlePost, setTitlePost] = useState("");
  const [postContent, setPostContent] = useState("");

  const dispatch = useDispatch();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fffff",
      },
    },
  });

  let date = new Date();
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();
  let hour = String(date.getHours()).padStart(2, "0");
  let min = String(date.getMinutes()).padStart(2, "0");
  let sec = String(date.getSeconds()).padStart(2, "0");
  let postMoment =
    day + "/" + month + "/" + year + "-" + hour + ":" + min + ":" + sec;

  let idPost = date.getTime();

  const createPost = () => {
    dispatch(
      insertPost({
        idPost,
        titlePost,
        postContent,
        author: loggedUserName,
        postMoment,
      })
    );
    clearForm();
  };

  const clearForm = () => {
    setTitlePost("");
    setPostContent("");
  };

  

  return (
    <div>
      <form className={styles.newForm}>
        <Container spacing={4}>
          <p>What's on your mind?</p>
          <StyledTextField
            fullWidth={true}
            variant="outlined"
            label="Title"
            name="name"
            placeholder="Hello world"
            onChange={(e) => setTitlePost(e.target.value)}
          />
          <TextareaAutosize
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
            name="postsContent"
            onChange={(e) => setPostContent(e.target.value)}
          />
          <ThemeProvider theme={theme}>
            {titlePost && postContent ? (
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
                onClick={createPost}
              >
                create
              </Button>
            ) : (
              <Button
                disabled
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
                onClick={createPost}
              >
                create
              </Button>
            )}
          </ThemeProvider>
        </Container>
      </form>
    </div>
  );
}

export default NewForm;