import React from "react";

const Banner = ({ user }) => {
  return (
    <div className="self-end flex items-center justify-center h-60 w-full bg-banner text-gray-xlight font-semibold bg-center bg-no-repeat bg-cover">
      <div>
        <h1 className="text-6xl text-orange-400 drop-shadow-3xl">{user && user.orgname}</h1>
      </div>
    </div>
  );
};

export default Banner;
