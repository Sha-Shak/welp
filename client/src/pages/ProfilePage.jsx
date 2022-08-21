import React from "react";
import Profile from "../Components/Profile/Profile";
import Sidebar from "../Components/Sidebar/Sidebar";
import TopBar from "../Components/TopBar/TopBar";

const ProfilePage = ({ id }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <TopBar />
        <div className="container mx-auto">
          <div className="flex justify-around">
            <Profile />
            <div className="w-full lg:pl-20">
              <img
                src="https://res.cloudinary.com/dgn4bscl4/image/upload/v1660635169/login_don2mi.png"
                className=""
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
