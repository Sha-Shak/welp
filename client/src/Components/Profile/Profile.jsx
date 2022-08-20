import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Profile = () => {
  const user = useSelector((state) => state.users);
  const navigate = useNavigate();
  console.log("no user", user);
  useEffect(() => {
    if (!user.id) {
      console.log("no user");
      navigate("/");
    }
  }, [user]);
  const dummyImg =
    "https://res.cloudinary.com/dgn4bscl4/image/upload/v1660585320/Screenshot_2021-08-07_at_11.35.28_PM_erxssn.png";

  return (
    <div className="items-center justify-center p-10 lg:p-20 ">
      <div className="mb-5 flex items-center">
        <figure className="border-2 border-gray-200">
          <img
            className="rounded-full w-36 h-36"
            src={user.img_url ? user.img_url : dummyImg}
          />
        </figure>
      </div>
      <div className="space-y-4">
        <h4 className="text-2xl text-left font-normal">
          Name: {`${user.firstname} ${user.lastname}`}
        </h4>
        <h4 className="text-2xl text-left font-normal">
          Bio: {user.bio ? user.bio : "No bio available"}
        </h4>
        <h4 className="text-2xl text-left font-normal">Email: {user.email}</h4>
        <h4 className="text-2xl text-left font-normal">
          Location: {user.location ? user.location : "Please Add location"}
        </h4>
        {user.interest &&
          user.interest.map((inter) => <h4>Interests: {inter}</h4>)}
      </div>
    </div>
  );
};

export default Profile;
