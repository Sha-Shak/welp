import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";



const Banner = ({ user }) => {

  const lottieContainer = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/lottieFiles/lf30_editor_mx1hjrkv.json"),
    });
  }, [])

  return (
    <div className="self-end flex items-center justify-center h-60 h-max-60 w-full text-gray-xlight font-semibold bg-center bg-no-repeat bg-cover">
      <div className="relative h-60 h-max-60">
        <div className="relative h-60" ref={lottieContainer}></div>
        <h1 className="absolute text-6xl text-orange-400 drop-shadow-3xl z-10 text-center w-full h-full top-1/2 mt-[-30px]">{user && user.orgname}</h1>
      </div>
    </div>
  );
};

export default Banner;
