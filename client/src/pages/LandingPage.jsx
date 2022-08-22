import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const LandingPage = () => {
  const lottieContainer1 = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/116500-girl-studying-on-laptop.json"),
    });
  }, []);

  return (
    <div className="m-0 overflow-x-hidden container">
      <div className="layer1 spacer h-[60vh]">
        <section className="relative flex flex-col items-center pt-100px min-h-[70vh]">
          <nav className="w-full flex pt-2 backdrop-blur-3xl pb-4">
            <img
              src="https://res.cloudinary.com/dgn4bscl4/image/upload/v1661154812/cover_gumerv.png"
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
          {
            //   <div class="waveShape">
            //   <svg
            //     data-name="Layer 1"
            //     xmlns="http://www.w3.org/2000/svg"
            //     viewBox="0 0 1200 120"
            //     preserveAspectRatio="none"
            //   >
            //     <path
            //       d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            //       class="shape-fill"
            //     ></path>
            //   </svg>
            // </div>
          }
        </section>
      </div>

      <section>
        <h1>Nice curves</h1>
        <p>
          Ipsam, officia autem impedit laborum vel voluptates tenetur aliquam
          eius distinctio nulla rem eligendi accusamus molestiae dicta fuga nemo
          doloremque facilis vero fugit. Repellendus eaque facere quibusdam
          delectus voluptatibus odio.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
