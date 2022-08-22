import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Sidebar from "../Components/Sidebar/Sidebar";
import TopBar from "../Components/TopBar/TopBar";
import { Link } from "react-router-dom";

function Error404() {
  const user = JSON.parse(localStorage.getItem("data"));
  const lottieContainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/77620-404-website-error-animation.json"),
    });
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        <TopBar />
        <div className="container mx-auto">
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-5xl mb-10">Error 404</h1>
              <h2 className="text-xl mb-10">Oh no! Looks like the page you were looking for does not exist.</h2>
              <Link to={user ? '/dashboard' : '/'}>
                <button className="bg-prpl-button text-gray-xlight p-4 rounded-full">
                  {user ? "Go to Dashboard" : "Go to Homepage"}
                </button>
              </Link>
            </div>
            <div ref={lottieContainer} className="p-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;