import React from "react";
import EditUserForm from "../Components/EditUser/EditUserForm";
import Profile from "../Components/Profile/Profile";

const EditUser = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full border-r-2 border-gray-light items-center justify-center">
        <Profile />
      </div>
      <div className="w-full">
        <EditUserForm />
      </div>
    </div>
  );
};

export default EditUser;
