import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrg } from "../../actions/users.action.js";
import Button from "../Buttons/SubmitButton";
import TextInput from "../Inputs/TextInput";

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSwitch = (e) => {
    console.log(e.target);
    navigate("/login");
  };
  const handleSubmit = (e) => {
    console.log("first from comp");
    e.preventDefault();

    let data = {
      email: e.target.email.value,
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      orgName: e.target.organization.value,
      type: "Admin",
      password: e.target.password.value,
    };
    console.log("component", data);
    dispatch(createOrg(data));
  };

  return (
    <>
      <div className="w-full flex items-center justify-center py-10 border-r-2 border-gray-200 ">
        <div className="max-w-md space-y-8">
          <div>
            <h6 className="text-xl left">Welcome to Welp!</h6>
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Sign up for an account
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <div className="rounded-md shadow-md p-8 ">
              <div className="mx-8">
                <div className="flex mb-4 justify-between">
                  <TextInput
                    id="firstname"
                    name="firstname"
                    type="text"
                    autocomplete="given-name"
                    required
                    placeholder="First Name"
                    half
                  />

                  <TextInput
                    id="lastname"
                    name="lastname"
                    type="text"
                    autocomplete="family-name"
                    required
                    placeholder="Last Name"
                    half
                  />
                </div>
                <div className="mb-4">
                  <TextInput
                    id="organization"
                    name="organization"
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
                  id="confirmPassword"
                  name="confirm password"
                  type="password"
                  autocomplete="off"
                  required
                  placeholder="Confirm Password"
                />
              </div>
              <Button type="submit" buttonText="Sign up"></Button>
            </div>

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
