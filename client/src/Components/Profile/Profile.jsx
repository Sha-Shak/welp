import React from "react";

const Profile = () => {
  const user = {
    name: "Shariar Shakhawat",
    id: "2",
    location: "Dhaka, Bangladesh",
    interest: ["Coding", "JavaScript", "Tech", "Islam"],
    status: "I'm good",
    organization: "Codeworks",
    profilePic:
      "https://res.cloudinary.com/dgn4bscl4/image/upload/v1660585320/Screenshot_2021-08-07_at_11.35.28_PM_erxssn.png",
  };
  return (
    <div className="w-full border-r-2 p-10 lg:p-20 border-gray-300">
      <div>
        <figure>
          <img className="rounded-full w-36 h-36" src={user.profilePic} />
        </figure>
      </div>
      <div>
        <h4>{user.name}</h4>
        <h4>{user.location}</h4>
        <h4>{user.organization}</h4>
        {user.interest.map((inter) => (
          <h4>{inter}</h4>
        ))}
      </div>
    </div>
  );
};

export default Profile;
