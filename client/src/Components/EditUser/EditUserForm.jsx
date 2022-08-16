import React from "react";
import Button from "../Buttons/SubmitButton";
import TextInput from "../Inputs/TextInput";
function EditUserForm() {
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
              </div>
              <div className="mb-4">
                <TextInput
                  id="status"
                  name="status"
                  type="text"
                  required
                  placeholder="Status"
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
          </form>
        </div>
      </div>
    </>
  );
}

export default EditUserForm;
