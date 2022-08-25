import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import Profile from "../Components/Profile/Profile";
import Sidebar from "../Components/Sidebar/Sidebar";
import TopBar from "../Components/TopBar/TopBar";

const ProfilePage = ({ id }) => {
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
          <div className="w-full flex justify-around  ">
            <Profile />

            <div ref={lottieContainer} className="w-full p-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
