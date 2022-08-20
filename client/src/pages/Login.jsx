import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import LoginForm from "../Components/Login/LoginForm";
function Login() {
  const lottieContainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/116500-girl-studying-on-laptop.json"),
    });
  }, []);
  return (
    <div className="flex justify-around">
      <LoginForm />
      <div ref={lottieContainer} className="w-full p-20"></div>
    </div>
  );
}

export default Login;
