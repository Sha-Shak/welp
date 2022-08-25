import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import SignupForm from "../Components/Signup/SignupForm";
import TopBar from "../Components/TopBar/TopBar";
function SignUp() {
  const lottieContainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/signup-orange-ambition.json"),
    });
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <TopBar />
        <div className="container mx-auto">
          <div className="flex justify-around">
            <SignupForm />
            <div ref={lottieContainer} className="w-full p-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
