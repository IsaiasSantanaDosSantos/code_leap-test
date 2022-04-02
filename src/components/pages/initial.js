import { Container } from "@mui/material";
import styles from "./Initial.module.css";
import logo from "../img/logo_cl.png";

function Initial() {
  return (
    <Container className={styles.init}>
      <div>
        <img alt="Logo CodeLeap" src={logo} />
      </div>
    </Container>
  );
}

export default Initial;
