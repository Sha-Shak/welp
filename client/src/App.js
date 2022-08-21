import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "../src/pages/Login";
import AddAdmin from "./pages/AddAdmin";
import AddUser from "./pages/AddUser";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import EditAdmin from "./pages/EditAdmin";
import EditUser from "./pages/EditUser";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import VideoCall from "./pages/VideoCall"

function App() {
  return (
    <div data-theme="light" className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/land" element={<LandingPage />} />
          {
            // <Route path="/" element={<Dashboard />} />
          }

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/add-admin" element={<AddAdmin />} />
          <Route path="/edit-admin" element={<EditAdmin />} />
          <Route path="/edit-user" element={<EditUser />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {
            //<Route path="/messaging" element={<Messaging />} />
          }
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/video/:id" element={<VideoCall />} />
          <Route
            path="*"
            element={<p>STOP EMBARASSING YOURSELF! Route doesn't exist</p>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
