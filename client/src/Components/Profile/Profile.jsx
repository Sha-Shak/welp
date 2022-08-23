import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Profile = () => {
  const user = useSelector((state) => state.users);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.id) {
      console.log("no user");
      navigate("/dashboard");
    }
  }, [user]);
  const dummyImg =
    "https://res.cloudinary.com/dgn4bscl4/image/upload/v1660585320/Screenshot_2021-08-07_at_11.35.28_PM_erxssn.png";

  return (
    <div className="w-full items-center justify-center p-10 lg:p-20 ">
      <div className="mb-5 flex items-center ">
        <figure className="">
          <img
            className="border-4 border-indigo rounded-full w-36 h-36"
            src={user.img_url ? user.img_url : dummyImg}
          />
        </figure>
      </div>
      <div className="space-y-4">
        {user.type === "admin" ? (
          <span className="bg-indigo/50 text-gray-dark text-s font-semibold mr-2 px-2.5 py-0.5 rounded">
            Admin
          </span>
        ) : null}
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

        <h4 className="text-2xl text-left font-normal">
          Interests:{" "}
          {user.interests &&
            user.interests.map((interest) => (
              <p className="bg-gray-light py-2 px-3 mx-2 my-3 text-center">
                {interest}
              </p>
            ))}
        </h4>
      </div>
    </div>
  );
};

export default Profile;
