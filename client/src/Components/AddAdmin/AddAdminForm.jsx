import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  addAdminToOrganization,
  clearCreateAdmin,
  clearError,
} from "../../actions/users.action.js";
import Button from "../Buttons/SubmitButton";
import TextInput from "../Inputs/TextInput";

function AddAdminForm() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  // console.log("user exist?", user);
  useEffect(() => {
    if (!user.id) {
      navigate("/login");
    }
  }, [user, navigate]);
  const dispatch = useDispatch();
  const response = useSelector((state) => state.users);
  const error = useSelector((state) => state.errors);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newAdmin = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      type: "admin",
    };
    dispatch(addAdminToOrganization(newAdmin)).then(() => {
      setTimeout(() => {
        dispatch(clearError());
        dispatch(clearCreateAdmin());
      }, 2000);
    });
    e.target.reset();
  };
  return (
    <>
      <div className="w-full flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 border-r-2 border-gray-light ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h6 className="text-xl text-center">Make Managing Easier</h6>
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Create An Admin
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            {error && (
              <h2 className="text-center text-2xl tracking-tight font-bold text-white bg-error">
                {error}
              </h2>
            )}
            {response.status &&
              (response.status > 201 ? (
                <h2 className="text-center text-2xl tracking-tight font-bold text-white bg-error">
                  Something went wrong
                </h2>
              ) : (
                <h2 className="text-center text-2xl tracking-tight font-normal p-2 rounded-lg text-font-green bg-bg-green">
                  Admin created Successfully!
                </h2>
              ))}
            <div className="text-center rounded-md shadow-lg p-8 ">
              <div className="mx-8">
                <div className="flex mb-4 justify-between">
                  <TextInput
                    id="firstname"
                    name="first-name"
                    type="text"
                    autocomplete="given-name"
                    required
                    placeholder="First Name"
                    half
                  />

                  <TextInput
                    id="lastname"
                    name="last-name"
                    type="text"
                    autocomplete="family-name"
                    required
                    placeholder="Last Name"
                    half
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
              <Button type="submit" buttonText="Add Admin"></Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddAdminForm;
