import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard.jsx";
import Login from "../src/pages/Login.jsx";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import TopBar from "./Components/TopBar/TopBar.jsx";
import AddUser from "./pages/AddUser.jsx";
import SignUp from "./pages/SignUp.jsx";
function App() {
  return (
    <div data-theme="light" className="App">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <TopBar />
          <div className="container mx-auto">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/add-user" element={<AddUser />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
