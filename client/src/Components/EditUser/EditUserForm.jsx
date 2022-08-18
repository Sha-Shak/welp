import React from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../actions/users.action.js";
import Button from "../Buttons/SubmitButton";
import TextInput from "../Inputs/TextInput";
function EditUserForm() {
  const user = JSON.parse(localStorage.getItem("data"));
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const interestArray = e.target.interest.value.split(",");
    console.log("object", interestArray);
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      bio: e.target.bio.value,
      interests: interestArray,
      location: e.target.location.value,
      password: e.target.password.value,
    };
    const newData = { ...user, ...data };
    console.log("edited data", newData);
    dispatch(editUser(newData)).then(() => {
      e.target.reset();
    });
  };
  return (
    <div className="grow justify-center">
      <div className="flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Edit User
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
              </div>
              <div className="mb-4">
                <TextInput
                  id="bio"
                  name="bio"
                  type="text"
                  required
                  placeholder="Bio"
                />
              </div>
              <div className="mb-4">
                <TextInput
                  id="location"
                  name="location"
                  type="text"
                  required
                  placeholder="Location"
                />
              </div>
              <div className="mb-4">
                <TextInput
                  id="interest"
                  name="interest"
                  type="text"
                  required
                  placeholder="Interests"
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

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="btn rounded-full bg-white text-indigo-500 mr-2"
                >
                  Save
                </button>
                <Button type="button" buttonText="cancel"></Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUserForm;
