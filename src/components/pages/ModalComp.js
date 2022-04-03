import styled from "@emotion/styled";
import {
  Button,
  inputLabelClasses,
  outlinedInputClasses,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import styles from "./ModalComp.module.css";


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

function ModalComp() {
  const [name, setName] = useState();

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.tittle}>Welcome to CodeLeap network!</h2>
          <StyledTextField
            fullWidth={true}
            variant="outlined"
            label="Please enter your username"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
          />
          <Button
            sx={{
              background: "#000000",
              borderRadius: "0",
              width: "111px",
              height: "33px",
              marginTop: "20px",
              float: "right",
            }}
            variant="contained"
          >
            enter
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModalComp;
