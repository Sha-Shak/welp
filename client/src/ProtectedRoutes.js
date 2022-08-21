import { Outlet } from "react-router-dom";
import Login from "./pages/Login";

const ProtectedRoutes = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Login /> 
}

export default ProtectedRoutes;