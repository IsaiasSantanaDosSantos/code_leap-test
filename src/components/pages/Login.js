
import React, { useEffect, useState } from "react";

import styles from "./Login.module.css";
import ModalComp from "./ModalComp";

//const color = "#DDDDDD";

function Login() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  return (
    <React.Fragment>{isModalVisible ? <ModalComp /> : null}</React.Fragment>
  );
}

export default Login;
