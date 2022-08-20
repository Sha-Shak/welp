import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import SignupForm from "../Components/Signup/SignupForm";
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
    <div className="flex justify-around">
      <SignupForm />
      <div ref={lottieContainer} className="w-full p-20"></div>
    </div>
  );
}

export default SignUp;
