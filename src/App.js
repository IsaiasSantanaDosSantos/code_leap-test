import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Initial from "./components/pages/Initial";
import Login from "./components/pages/Login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/login"element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
