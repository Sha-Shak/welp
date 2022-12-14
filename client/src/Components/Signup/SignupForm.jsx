import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearError, createOrg } from "../../actions/users.action.js";
import Button from "../Buttons/SubmitButton";
import TextInput from "../Inputs/TextInput";

function SignupForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.errors);
  useEffect(() => {
    navigate("/dashboard");
  }, []);
  const handleSubmit = async (e) => {
    // console.log("first from comp");
    e.preventDefault();

    let data = {
      email: e.target.email.value,
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      orgName: e.target.organization.value,
      type: "Admin",
      password: e.target.password.value,
    };

    await dispatch(createOrg(data, navigate)).then(() => {
      setTimeout(() => {
        dispatch(clearError());
      }, 3000);
    });
  };

  const handleChangePassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    if (pass === confirmPassword) setPasswordMatch(true);
    else setPasswordMatch(false);
  };

  const handleChangeConfirmPassword = (e) => {
    const cPassword = e.target.value;
    setConfirmPassword(cPassword);

    if (cPassword === password) setPasswordMatch(true);
    else setPasswordMatch(false);
  };

  return (
    <>
      <div className="w-full flex items-center justify-center py-10 border-r-2 border-gray-light ">
        <div className="max-w-md space-y-8">
          <div>
            <h6 className="text-xl text-center left">Welcome to Welp!</h6>
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-indigo">
              Sign up for an account
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            {error && (
              <h2 className="text-center text-2xl tracking-tight font-bold text-white bg-error">
                {error}
              </h2>
            )}
            <div className="text-center rounded-md shadow-md p-8 ">
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
                  onChange={handleChangePassword}
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
                  name="confirmPassword"
                  type="password"
                  autocomplete="off"
                  required
                  placeholder="Confirm Password"
                  onChange={handleChangeConfirmPassword}
                />
              </div>
              <Button
                disabled={!passwordMatch}
                type="submit"
                buttonText="Sign up"
              ></Button>
            </div>

            <h6 className="text-xl text-center">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-2xl text-indigo cursor-pointer"
              >
                Log-in
              </span>
            </h6>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
