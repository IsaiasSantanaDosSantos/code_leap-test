import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Initial from "./components/pages/initial";

function App() {
  return (
    <Router>
      <Initial />
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;
