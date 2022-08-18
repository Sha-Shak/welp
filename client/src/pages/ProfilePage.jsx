import React from "react";
import Profile from "../Components/Profile/Profile";

const ProfilePage = ({ id }) => {
  return (
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
  );
};

export default ProfilePage;
