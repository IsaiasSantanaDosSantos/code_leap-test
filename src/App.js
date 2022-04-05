import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Initial from "./components/pages/Initial";
import Login from "./components/pages/Login";
import Main from "./components/pages/MainPage"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/login"element={<Login />} />
        <Route path="/mainpage" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
