import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Login from "../src/pages/Login";
import "./App.css";
import AddAdmin from "./pages/AddAdmin";
import AddUser from "./pages/AddUser";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import EditAdmin from "./pages/EditAdmin";
import EditUser from "./pages/EditUser";
import Error404 from "./pages/Error404";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import Random from "./pages/Random";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  const [loading, setLoading] = useState(true);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });
  return (
    <div
      data-theme="light"
      className={
        (loading && "flex h-screen items-center ") +
        "App bg-gradient bg-no-repeat"
      }
    >
      {loading ? (
        <HashLoader color="#125ec0" cssOverride={override} size={150} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
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
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/random" element={<Random />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
