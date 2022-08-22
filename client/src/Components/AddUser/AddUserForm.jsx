import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserToOrganization,
  clearCreateUser,
  clearError,
} from "../../actions/users.action.js";
import Button from "../Buttons/SubmitButton";
import TextInput from "../Inputs/TextInput";
import { generateRandomPassword } from '../../utils/services';
function AddUserForm() {
  const user = useSelector((state) => state.auth);
  const response = useSelector((state) => state.users);
  const error = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const randPass = generateRandomPassword();
    console.log("New user password: ", randPass);

    const newUser = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: randPass,
    };
    dispatch(addUserToOrganization(newUser)).then(() => {
      setTimeout(() => {
        dispatch(clearError());
        dispatch(clearCreateUser());
      }, 2000);
    });
    e.target.reset();
  };

  return (
    <>
      {user.type === "admin" ? (
        <div className="w-full flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 border-r-2 border-gray-light">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h6 className="text-xl text-gray left">
                Add people to your community
              </h6>
              <h1 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray">
                Create User
              </h1>
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
              {response.status &&
                (response.status > 201 ? (
                  <h2 className="text-center text-2xl tracking-tight font-bold text-white bg-error">
                    Something went wrong
                  </h2>
                ) : (
                  <h2 className="text-center text-2xl tracking-tight font-normal p-2 rounded-lg text-font-green bg-bg-green">
                    User created Successfully!
                  </h2>
                ))}
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
                <Button type="submit" buttonText="Create User"></Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h1 className="w-full text-7xl mt-10">Swiper, no swiping!</h1>
      )}
    </>
  );
}

export default AddUserForm;
