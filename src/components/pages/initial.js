import { Container } from "@mui/material";
import styles from "./initial.module.css";
import logo from "../img/logo_cl.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Initial() {
  const navigator = useNavigate();

  useEffect(() => {
    const nextPage = () => {
      setTimeout(() => {
        navigator("/loginmodal");
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
