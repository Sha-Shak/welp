import React from "react";
import EditAdminForm from "../Components/AddAdmin/AddAdminForm";

function EditAdmin() {
  return (
    <div className="flex justify-around">
      <EditAdminForm />
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

export default EditAdmin;
