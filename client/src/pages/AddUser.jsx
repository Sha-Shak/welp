import React from "react";
import AddUserForm from "../Components/AddUser/AddUserForm";

function AddUser() {
  return (
    <div className="flex justify-around">
      <AddUserForm />
      <div>
        <img
          src="https://res.cloudinary.com/dgn4bscl4/image/upload/v1660635169/login_don2mi.png"
          className=""
          alt=""
        />
      </div>
    </div>
  );
}

export default AddUser;
