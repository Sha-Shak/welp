import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "../src/pages/Login";
import Sidebar from "./Components/Sidebar/Sidebar";
import TopBar from "./Components/TopBar/TopBar";
import AddAdmin from "./pages/AddAdmin";
import AddUser from "./pages/AddUser";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import EditAdmin from "./pages/EditAdmin";
import EditUser from "./pages/EditUser";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import VideoCall from "./pages/VideoCall";

function App() {
  return (
    <div data-theme="light" className="App">
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <TopBar />
            <div className="container mx-auto">
              <Routes>
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
<<<<<<< HEAD
                <Route path="/dashboard" element={<Dashboard />} />
=======
                <Route path="/:id/dashboard" element={<Dashboard />} />
                <Route path="/video/:id" element={<VideoCall />} />
>>>>>>> adce6824d1026db46b8b27a1d6f338ce24efbaab
                {
                  //<Route path="/messaging" element={<Messaging />} />
                }
                <Route path="/profile" element={<ProfilePage />} />
                <Route
                  path="*"
                  element={
                    <p>STOP EMBARASSING YOURSELF! Route doesn't exist</p>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
