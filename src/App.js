import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Initial from "./components/pages/Initial";
import MainPage from "./components/pages/MainPage";
import ModalComp from "./components/pages/LoginModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/loginmodal" element={<ModalComp />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
