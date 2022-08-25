import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";

const ProtectedRoutes = () => {
  const user = useSelector((state) => state.auth);
  return user ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
