import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/SubmitButton";
import TextInput from "../Inputs/TextInput";

function SignupForm() {
  const navigate = useNavigate();

  const handleSwitch = (e) => {
    console.log(e.target);
    navigate("/login");
  };

  return (
    <>
      <div className="flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h6 className="text-xl left">Welcome to Welp!</h6>
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Sign up for an account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-lg p-8 ">
              <div className="mx-8">
                <div className="flex mb-4 justify-between">
                  <TextInput
                    id="first-name"
                    name="first-name"
                    type="text"
                    autocomplete="given-name"
                    required
                    placeholder="First Name"
                    half
                  />

                  <TextInput
                    id="last-name"
                    name="last-name"
                    type="text"
                    autocomplete="family-name"
                    required
                    placeholder="Last Name"
                    half
                  />
                </div>
                <div className="mb-4">
                  <TextInput
                    id="organization-name"
                    name="organization-name"
                    type="text"
                    required
                    placeholder="Organization Name"
                  />
                </div>
              </div>
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
              <div className="mb-4">
                <TextInput
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autocomplete="off"
                  required
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <Button type="submit" buttonText="Sign up"></Button>
            <h6 className="text-xl">
              Already have an account?{" "}
              <span
                onClick={handleSwitch}
                className="text-2xl text-indigo-500 cursor-pointer"
              >
                Log-in{" "}
              </span>
            </h6>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
