import React, { useState } from "react";
import ActionsBox from "./ActionsBox.jsx";

const CardBack = ({ loggedInUser, user }) => {

  const dummyImage =
    "https://res.cloudinary.com/dgn4bscl4/image/upload/v1660585320/Screenshot_2021-08-07_at_11.35.28_PM_erxssn.png";

  return (
    <div className="card border-2 border-gray-xlight card-side bg-base-100 shadow-xl p-2 my-2 w-300 h-300">
      <figure>
      <img
          className="rounded-full w-32 h-32 p-2"
          src={!user.img_url ? dummyImage : user.img_url}
          alt="propic"
        />
      </figure>
      <ActionsBox 
        loggedInUser={loggedInUser}
        user={user}
      />
    </div>
  );
};

export default CardBack;
