import { Container } from "@mui/material";
import styles from "./Initial.module.css";
import logo from "../img/logo_cl.png";
import { useNavigate } from "react-router-dom";
import { useCallBack, useEffect } from "react";

function Initial() {
  const navigator = useNavigate();

  useEffect(() => {
    const nextPage = () => {
      setTimeout(() => {
        navigator("/login");
      }, 2500);
    };

    nextPage();
  }, [navigator]);

  return (
    <Container className={styles.init}>
      <div>
        <img alt="Logo CodeLeap" src={logo} />
      </div>
    </Container>
  );
}

export default Initial;
