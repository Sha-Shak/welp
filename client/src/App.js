import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard.jsx";
import Login from "../src/pages/Login.jsx";
import "./App.css";
import SignUp from "./pages/SignUp.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
