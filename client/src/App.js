import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import "./App.css";
import DummyForm from "./Components/Inputs/DummyForm/DummyForm";
import AddAdmin from "./pages/AddAdmin";
import AddUser from "./pages/AddUser";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import EditAdmin from "./pages/EditAdmin";
import EditUser from "./pages/EditUser";
import Error404 from "./pages/Error404";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import VideoCall from "./pages/VideoCall";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <div data-theme="light" className="App bg-gradient bg-no-repeat">
      <BrowserRouter>
        <Routes>
          <Route path="/land" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/add-admin" element={<AddAdmin />} />
            <Route path="/edit-admin" element={<EditAdmin />} />
            <Route path="/edit-user" element={<EditUser />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dummyform" element={<DummyForm />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/video/:id" element={<VideoCall />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
