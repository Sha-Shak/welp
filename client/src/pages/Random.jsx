import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Components/Sidebar/Sidebar";
import TopBar from "../Components/TopBar/TopBar";
import UserCard from "../Components/UserCard/UserCard";
import { getRandomUser } from "../utils/apiClientService";

function Random() {

  const [random, setRandom] = useState(null);
  const [message, setMessage] = useState("Click the button to get a random user to talk to.");
  const user = useSelector((state) => state.auth);

  useEffect(() => {

  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    getRandomUser()
      .then((data) => { 
        if (data.data !== []) {
          setRandom(data.data);
        } else {
          setMessage("There are no new users in your organization to talk to.");
        }
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full h-full">
        <TopBar />
        <div className="container mx-auto h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <button className="bg-prpl-button text-gray-xlight text-xl p-3 rounded-full my-10" onClick={handleClick}>
              Get Random User
            </button>
            <div className="w-max-20">
              {random ? <UserCard user={random} loggedInUser={user} />
                : <h2>{message}</h2>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Random;