import React from "react";
import EditUserForm from "../Components/EditUser/EditUserForm";
import Profile from "../Components/Profile/Profile";

const EditUser = () => {
  return (
    <div className="flex justify-center">
      <div>
        <Profile />
      </div>
      <EditUserForm />
    </div>
  );
};

export default EditUser;
