import React from "react";
import AddAdminForm from "../Components/AddAdmin/AddAdminForm";

function AddAdmin() {
  return (
    <div className="flex justify-around">
    <AddAdminForm/>
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

export default AddAdmin;
