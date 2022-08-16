import React from "react";
import SignupForm from "../Components/Signup/SignupForm";
function SignUp() {
  return (
    <div className="flex justify-around">
      <SignupForm />
      <div className="w-full p-20">
        <img
          src="https://res.cloudinary.com/dgn4bscl4/image/upload/v1660635169/login_don2mi.png"
          className=""
          alt=""
        />
      </div>
    </div>
  );
}

export default SignUp;
