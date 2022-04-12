import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Initial from "./components/pages/initial";
import Main from "./components/pages/mainPage";
import ModalComp from "./components/pages/loginModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/loginmodal" element={<ModalComp />} />
        <Route path="/mainpage" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
