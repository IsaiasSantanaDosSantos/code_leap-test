import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Initial from "./components/pages/Initial";
import Main from "./components/pages/MainPage";
import ModalComp from "./components/pages/LoginModal";
import Form from "./components/pages/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/loginmodal" element={<ModalComp />} />
        <Route path="/mainpage" element={<Main />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
