import { Container, Button, createTheme, Grid } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import React, { useEffect } from "react";

import styles from "./MainPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import NewForm from "./NewForm";
import Posts from "./Posts";

function MainPage() {
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

  const logoutMainPage = () => {
    dispatch(logout());
    navigator("/loginmodal");
  };

  useEffect(() => {
    if (localStorage.getItem("isLogged") !== "true") {
      navigator("/loginmodal");
    }
  }, [navigator]);


     
  

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Grid container className={styles.informations}>
          <Grid item xs={8} sm={9}>
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
        <Container className={styles.contentContaiener}>
          <div>
            <p className={styles.salutation}>
              Hello, <span>{name}</span>!
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
