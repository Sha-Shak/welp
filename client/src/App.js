import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/dashboard.jsx";
import Login from "../src/pages/Login.jsx";
import "./App.css";
import SignUp from "./pages/signup.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/post" element={<SignUp />} />
        </Routes>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
