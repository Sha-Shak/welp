import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./ProtectedRoutes";
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
import Error404 from "./pages/Error404";

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
          <Route element={<ProtectedRoutes />}>
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/add-admin" element={<AddAdmin />} />
            <Route path="/edit-admin" element={<EditAdmin />} />
            <Route path="/edit-user" element={<EditUser />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/video/:id" element={<VideoCall />} />
          </Route>
          {
            //<Route path="/messaging" element={<Messaging />} />
          }
          <Route
            path="*"
            element={<Error404 />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
