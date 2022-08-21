import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import AddAdminForm from "../Components/AddAdmin/AddAdminForm";
import Sidebar from "../Components/Sidebar/Sidebar";
import TopBar from "../Components/TopBar/TopBar";

function AddAdmin() {
  const lottieContainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/admin-employee-content.json"),
    });
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <TopBar />
        <div className="container mx-auto">
          <div className="flex justify-around">
            <AddAdminForm />
            <div ref={lottieContainer} className="w-full lg:p-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
