import React from "react";
import LoginForm from "../Components/Login/LoginForm";
function Login() {
  return (
    <div className="flex justify-around">
      <LoginForm />
      <div className="w-full lg:pl-20">
        <img
          src="https://res.cloudinary.com/dgn4bscl4/image/upload/v1660635169/login_don2mi.png"
          className=""
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;