import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const LandingPage = () => {
  const lottieContainer1 = useRef();
  const lottieContainer2 = useRef();
  const lottieContainer3 = useRef();
  const lottieContainer4 = useRef();
  const lottieContainer5 = useRef();
  const lottieContainer6 = useRef();
  const lottieContainer7 = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/Home-support-centre.json"),
    });

    lottie.loadAnimation({
      container: lottieContainer2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/signup.json"),
    });
    lottie.loadAnimation({
      container: lottieContainer3.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/login-user-profile-v2.json"),
    });
    lottie.loadAnimation({
      container: lottieContainer4.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/admin-employee-content.json"),
    });
    lottie.loadAnimation({
      container: lottieContainer5.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/116500-girl-studying-on-laptop.json"),
    });
    lottie.loadAnimation({
      container: lottieContainer6.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/chat-lets-chat.json"),
    });
    lottie.loadAnimation({
      container: lottieContainer7.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/addUser-video-call.json"),
    });
  }, []);

  return (
    <div className="m-0 w-full overflow-x-hidden  overflow-y-hidden ">
      <section className="layer1 spacer h-[60vh] ">
        <nav className="w-full flex pt-2 backdrop-blur-3xl pb-4">
          <img
            src="https://res.cloudinary.com/dgn4bscl4/image/upload/v1661177563/logo-removebg-preview_ervmv3.png"
            alt=""
            className="h-14 w-18"
          />
          <ul className="absolute right-12 pt-3 flex mt-30">
            <Link to="/signup">
              <button
                type="button"
                className="bg-gray-xlight mr-4 text-indigo rounded-full px-6 py-2"
              >
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button
                type="button"
                className="bg-gray-xlight mr-4 text-indigo rounded-full px-6 py-2"
              >
                Log In
              </button>
            </Link>
          </ul>
        </nav>
        <div className="relative flex flex-col items-center pt-100px min-h-[70vh] container mx-auto">
          <div className="w-full flex">
            <div className="w-1/2 pl-9 mt-16">
              <h1 className="text-7xl text-gray-xlight">Welcome to Welp!</h1>
              <p className="text-gray-xlight text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, praesentium!
              </p>
            </div>
            <div className="w-1/2 h-96" ref={lottieContainer1}></div>
          </div>
        </div>
      </section>
      <section className="layer2 spacer h-[60vh] ">
        <div className="relative flex flex-col items-center pt-100px min-h-[70vh] container mx-auto ">
          <div className="w-full flex">
            <div className="w-1/2 h-96" ref={lottieContainer2}></div>
            <div className="w-1/2 pl-9 mt-16">
              <h1 className="text-7xl text-indigo">Register!</h1>
              <p className="text-indigo text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, praesentium!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="layer1 spacer h-[60vh]">
        <div className="relative flex flex-col items-center pt-100px min-h-[70vh] container mx-auto">
          <div className="w-full flex">
            <div className="w-1/2 pl-9 mt-16">
              <h1 className="text-7xl text-gray-xlight">Sign in</h1>
              <p className="text-gray-xlight text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, praesentium!
              </p>
            </div>
            <div className="w-1/2 h-96" ref={lottieContainer3}></div>
          </div>
        </div>
      </section>
      <section className="layer2 spacer h-[60vh]">
        <div className="relative flex flex-col items-center pt-100px min-h-[70vh] container mx-auto">
          <div className="w-full flex">
            <div className="w-1/2 pl-9 mt-16">
              <h1 className="text-7xl text-indigo">Add admin</h1>
              <p className="text-indigo text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, praesentium!
              </p>
            </div>
            <div className="w-1/2 h-96" ref={lottieContainer4}></div>
          </div>
        </div>
      </section>
      <section className="layer1 spacer h-[60vh]">
        <div className="relative flex flex-col items-center pt-100px min-h-[70vh] container mx-auto">
          <div className="w-full flex">
            <div className="w-1/2 h-96" ref={lottieContainer5}></div>
            <div className="w-1/2 pl-9 mt-16">
              <h1 className="text-7xl text-gray-xlight">Add users</h1>
              <p className="text-gray-xlight text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, praesentium!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="layer2 spacer h-[60vh]">
        <div className="relative flex flex-col items-center pt-100px min-h-[70vh] container mx-auto">
          <div className="w-full flex">
            <div className="w-1/2 pl-9 mt-16">
              <h1 className="text-7xl text-indigo">Chat</h1>
              <p className="text-indigo text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, praesentium!
              </p>
            </div>
            <div className="w-1/2 h-96" ref={lottieContainer6}></div>
          </div>
        </div>
      </section>
      <section className="layer1 spacer h-[60vh]">
        <div className="relative flex flex-col items-center pt-100px min-h-[70vh] container mx-auto">
          <div className="w-full flex">
            <div className="w-1/2 h-96" ref={lottieContainer7}></div>
            <div className="w-1/2 pl-9 mt-16">
              <h1 className="text-7xl text-gray-xlight">Video Call</h1>
              <p className="text-gray-xlight text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, praesentium!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
