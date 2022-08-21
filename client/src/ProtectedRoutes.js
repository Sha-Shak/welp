import { Outlet } from "react-router-dom";
import { useState, useSelector } from 'react-redux';
import Login from "./pages/Login";

const ProtectedRoutes = () => {
  
  const user = useSelector((state) => state.auth);
  return user ? <Outlet /> : <Login /> 
}

export default ProtectedRoutes;