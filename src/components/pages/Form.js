import styled from "@emotion/styled";
import {
  inputLabelClasses,
  outlinedInputClasses,
  TextareaAutosize,
  TextField,
} from "@mui/material";
<<<<<<< HEAD
//import { useState } from "react";
import { useSelector } from "react-redux";
=======
import { useState } from "react";
>>>>>>> parent of 1a3605c (build: show date in posts.)

import styles from "./Form.module.css"

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

function Form() {
<<<<<<< HEAD
  const postList = useSelector((state) => state.postList);
  

  return (
    <div className={styles.newForm}>
        {  postList.map((post) => (


        {/*<div key={post.postContent}>
          <StyledTextField
            fullWidth={true} 
            variant="outlined"
            label="Title"
            name="name"
            placeholder="Hello world"
            value={"oi"}
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
            value={"post.postContent"}
          />
          </div>*/}



      ))}
      
=======
  const [titlePost, setTitlePost] = useState();
  const [postContent, setPostContent] = useState();

  return (
    <div className={styles.newForm}>
      <StyledTextField
        fullWidth={true}
        variant="outlined"
        label="Title"
        name="name"
        placeholder="Hello world"
        value={titlePost}
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
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
>>>>>>> parent of 1a3605c (build: show date in posts.)
    </div>
  );
}

export default Form;
