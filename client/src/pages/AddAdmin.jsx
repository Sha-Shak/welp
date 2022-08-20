import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import AddAdminForm from "../Components/AddAdmin/AddAdminForm";

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
    <div className="flex justify-around">
      <AddAdminForm />
      <div ref={lottieContainer} className="w-full lg:p-20"></div>
    </div>
  );
}

export default AddAdmin;
