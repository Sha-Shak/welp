import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/SubmitButton";
import TextInput from "../Inputs/TextInput";

function LoginForm() {
  const navigate = useNavigate();

  const handleSwitch = (e) => {
    console.log(e.target);
    navigate("/signup");
  };
  return (
    <>
      <div className="w-full flex items-center justify-center py-10 border-r-2 border-gray-300">
        <div className="w-full">
          <div>
            <h6 className=" left">Welcome Back!</h6>
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md p-4 w-full">
              <div className="mb-4">
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  placeholder="Email address"
                />
              </div>
              <div className="mb-4">
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="off"
                  required
                  placeholder="Password"
                />
              </div>
              <Button type="submit" buttonText="Sign in"></Button>
            </div>

            <h6 className="text-xl">
              Don't have an account?{" "}
              <span
                onClick={handleSwitch}
                className="text-2xl text-indigo-500 cursor-pointer"
              >
                Sign Up{" "}
              </span>
            </h6>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;