import lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Sidebar from "../Components/Sidebar/Sidebar";
import TopBar from "../Components/TopBar/TopBar";
import CardFlip from "../Components/UserCard/CardFlip";
import { getRandomUser } from "../utils/apiClientService";

function Random() {
  const [random, setRandom] = useState(null);
  const [message, setMessage] = useState(
    "Click the button to get a random user to talk to."
  );
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.id) {
      navigate("/login");
    }
  }, [user]);
  const lottieContainer1 = useRef();
  const lottieContainer2 = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/chat-lets-chat.json"),
    });

    lottie.loadAnimation({
      container: lottieContainer2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottieFiles/admin-employee-content.json"),
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    getRandomUser()
      .then((data) => {
        if (data.data.length !== 0) {
          setRandom(data.data);
        } else {
          setMessage("There are no new users in your organization to talk to.");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <TopBar />
        <div className="container mx-auto grow">
          <div className="flex justify-around">
            <div className="w-1/3" ref={lottieContainer1}></div>
            <div className="flex flex-col justify-start items-center h-full">
              <button
                className="bg-prpl-button text-gray-xlight text-xl p-3 rounded-full my-10"
                onClick={handleClick}
              >
                Get Random User
              </button>
              <div className="w-max-20">
                {random ? (
                  <CardFlip user={random} loggedInUser={user} />
                ) : (
                  <h2 className="text-l">{message}</h2>
                )}
              </div>
            </div>
            <div className="w-1/3 self-end" ref={lottieContainer2}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Random;
