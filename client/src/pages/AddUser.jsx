import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import AddUserForm from "../Components/AddUser/AddUserForm";

function AddUser() {
  const lottieContainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/addUser-video-call.json"),
    });
  }, []);
  return (
    <div className="flex justify-around">
      <AddUserForm />
      <div ref={lottieContainer} className="w-full p-20"></div>
    </div>
  );
}

export default AddUser;
