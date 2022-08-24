import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
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
      <section className="layer1 spacer h-[70vh] ">
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
        <div className="relative flex flex-col items-center pt-100px h-full container mx-auto">
          <div className="w-full flex">
            <div className="w-1/2 pl-9 mt-16">
              <h1 className="text-7xl text-gray-xlight">Welcome to Welp!</h1>
{/* <<<<<<< HEAD */}
              <p className="text-gray-xlight text-xl ">
                A lounge for your remote team
{/* ======= */}
              {/* <p className="text-gray-xlight text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, praesentium! */}
{/* >>>>>>> c96cc1c36541989c71a7190e97e2500c90104eb5 */}
              </p>
            </div>
            <div className="w-3/4 h-3/4" ref={lottieContainer1}></div>
          </div>
        </div>
      </section>
{/* <<<<<<< HEAD */}
      {/* HEAD */}
       {/* <section className="layer2 spacer h-[60vh] ">
        <div className="relative flex flex-col items-center pt-100px min-h-[60vh] container mx-auto ">
          <div className="w-full flex">
          <div className="w-1/2 h-96" ref={lottieContainer2}></div>
           <div className="w-1/2 pl-9 mt-16">
            <h1 className="text-7xl text-indigo">Register!</h1>
              <p className="text-indigo text-xl">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Consequuntur, praesentium!
                </p>
            </div>
            </div> */}
{/* // ======= */}
      // <section className="px-32 py-32 my-auto flex justify-around bg-gray-light space-x-6">
// =======
      <section className="px-10 py-32 my-auto flex justify-around bg-gray-light space-x-6">
{/* >>>>>>> c96cc1c36541989c71a7190e97e2500c90104eb5 */}
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16"
            src="https://d33wubrfki0l68.cloudfront.net/af047ac54e246e4a16a9874f8f8e8b23b944786a/4f102/3d.87c64f5b.svg"
            alt=""
          />
          <h4 className="text-red-500 font-bold">REGISTER ORGANIZATION</h4>
          <p className="text-black text-center">
            Signup using your organization name
          </p>
{/* >>>>>>> 600b8148e59fe0b78efb7aa65a49f3fea9a62081 */}
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16"
            src="https://d33wubrfki0l68.cloudfront.net/af047ac54e246e4a16a9874f8f8e8b23b944786a/4f102/3d.87c64f5b.svg"
            alt=""
          />
          <h4 className="text-red-500 font-bold">ADD USERS</h4>
          <p className="text-black text-center">
            Add people of your organization <br/>using their email addresses
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16 "
            src="https://d33wubrfki0l68.cloudfront.net/af047ac54e246e4a16a9874f8f8e8b23b944786a/4f102/3d.87c64f5b.svg"
            alt=""
          />
          <h4 className="text-red-500 font-bold">COMMUNITY BUILT!</h4>
          <p className="text-black text-center">
            Welp Algorithm will handle the rest!
          </p>
        </div>
      </section>
      <section className="layer2 spacer h-[60vh]">
        <div className="relative flex flex-col items-center pt-100px min-h-[70vh] container mx-auto">
          <div className="w-full flex">
            <div className="w-1/2 pl-9 mt-16">
{/* <<<<<<< HEAD */}
              <h1 className="text-7xl text-indigo">How it works</h1>
              <p className="text-indigo text-xl mt-4">
                Community members are asked to input their interests. 
              </p>
              <p className="text-indigo text-xl mt-2">
                Based on their interests they are matched with other people in the community.
              </p>
              <p className="text-indigo text-xl mt-2">
                Welp Members can chat and video call.
              </p>
              <p className="text-indigo text-xl mt-2">
                If a community member cannot choose a member to network with, Welp Algorithm can suggest a colleague at random.
{/* ======= */}
              {/* <h1 className="text-7xl text-indigo">Add admin</h1>
              <p className="text-indigo text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, praesentium! */}
{/* >>>>>>> c96cc1c36541989c71a7190e97e2500c90104eb5 */}
              </p>
            </div>
            <div className="w-3/4 h-96" ref={lottieContainer7}></div>
          </div>
        </div>
      </section>
      <section className="layer1 spacer h-[60vh]">
        <div className="relative flex flex-col items-center pt-100px min-h-[70vh] container mx-auto">
          <div className="w-full flex">
            <div className="w-1/2 h-96" ref={lottieContainer6}></div>
            <div className="w-1/2 pl-9 mt-16">
{/* <<<<<<< HEAD */}
              <h1 className="text-7xl text-gray-xlight">Why Use Welp</h1>
              <p className="text-gray-xlight text-xl mt-5">
                 Chat and Video Call Features
              </p>
              <p className="text-gray-xlight text-xl mt-3">
                 A lounge for your online team
              </p>
              <p className="text-gray-xlight text-xl mt-3">
                 Ironing internal friction
              </p>
              <p className="text-gray-xlight text-xl mt-3">
                 Mental health of your team
{/* ======= */}
              {/* <h1 className="text-7xl text-gray-xlight">Add users</h1>
              <p className="text-gray-xlight text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, praesentium! */}
{/* >>>>>>> c96cc1c36541989c71a7190e97e2500c90104eb5 */}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="layer2 spacer h-[60vh]">
        <div className="relative flex flex-col items-center pt-100px min-h-[70vh] container mx-auto">
          <div className="w-full flex">
            <div className="w-1/2 pl-9 mt-16">
              <h1 className="text-7xl text-indigo">Chat</h1>
              <p className="text-indigo text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, praesentium!
              </p>
            </div>
            <div className="w-1/2 h-96" ref={lottieContainer5}></div>
          </div>
        </div>
      </section> */}
      {/* <section className="layer1 spacer h-[60vh]">
        <div className="relative flex flex-col items-center pt-100px min-h-[70vh] container mx-auto">
          <div className="w-full flex">
            <div className="w-1/2 h-96" ref={lottieContainer4}></div>
            <div className="w-1/2 pl-9 mt-16">
              <h1 className="text-7xl text-gray-xlight">Video Call</h1>
              <p className="text-gray-xlight text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, praesentium!
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section> */}
=======
      </section>
      <section className="px-10 py-32 my-auto flex justify-around bg-gray-xlight space-x-6 w-full">
        <div className="flex">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold text-indigo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className="mt-2 font-normal text-xl mt-2 text-indigo">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="w-1/3 ">
            <button className="bg-indigo px-8 py-2 rounded-full text-gray-xlight font- border-2 border-gray-xlight mr-3">
              Sign Up
            </button>
            <button className="bg-gray-xlight px-8 py-2 rounded-full text-indigo border-2 border-indigo">
              Log In
            </button>
          </div>
        </div>
      </section>

      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="" className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://res.cloudinary.com/dgn4bscl4/image/upload/v1661177563/logo-removebg-preview_ervmv3.png"
              className="mr-3 h-8"
              alt="Welp-Logo"
            />
          </a>
          <ul className="flex flex-wrap justify-around items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-6 ">
                <BsFacebook style={{ fontSize: "22px", color: "#177ee0" }} />
              </a>
            </li>
            <li>
              <a href="#" className="mr-6 ">
                <AiFillTwitterCircle
                  style={{ fontSize: "26px", color: "#177ee0" }}
                />
              </a>
            </li>
            <li>
              <a href="#" className="mr-6 ">
                <TiSocialLinkedinCircular
                  style={{ fontSize: "28px", color: "#177ee0" }}
                />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {" "}
          © 2022{" "}
          <a href="" className="hover:underline">
            Welp™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
{/* >>>>>>> c96cc1c36541989c71a7190e97e2500c90104eb5 */}
    </div>
  );
};

export default LandingPage;
