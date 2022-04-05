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
import styles from "./Posts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/User";

import NewForm from "./NewForm";

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

function Post() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  
  const dispatch = useDispatch();

  const { name } = useSelector(selectUser);

  return (
    <form className={styles.postsForm}>
      <div className={styles.containerTitle}>
        <h3 className={styles.postTitle}>Title</h3>
      </div>
      <div>
          <p>@{name}</p>
      </div>
      <Container >
        <TextareaAutosize
          fullWidth={true}
          aria-label="minimum height"
          minRows={8}
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
        />
        
      </Container>
    </form>
  );
}

export default Post;
