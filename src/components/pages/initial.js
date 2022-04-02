import { Container } from "@mui/material";
import styles from "./Initial.module.css";
import logo from "../img/logo_cl.png";
import { useNavigate } from "react-router-dom";

function Initial() {
  const navigator = useNavigate();

  function NextPage() {
    setTimeout(() => {
      navigator("/login");
    }, 2000);
  }

  NextPage();

  return (
    <Container className={styles.init}>
      <div>
        <img alt="Logo CodeLeap" src={logo} />
      </div>
    </Container>
  );
}

export default Initial;
