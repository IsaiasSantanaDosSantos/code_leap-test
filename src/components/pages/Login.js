import React, { useEffect, useState } from "react";

import ModalComp from "./ModalComp";

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
