import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserToOrganization,
  clearCreateUser,
} from "../../actions/users.action.js";
import Button from "../Buttons/SubmitButton";
import TextInput from "../Inputs/TextInput";
function AddUserForm() {
  const userJson = localStorage.getItem("data");
  const user = JSON.parse(userJson);
  console.log(user);

  const response = useSelector((state) => state.users);
  // const [user, setUser] = useState(response);
  console.log("changed", response);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("timeout");
  //     dispatch(clearCreateUser());
  //   }, 2000);
  // }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("adduser");
    const newUser = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log("from add user comp: ", newUser);
    dispatch(addUserToOrganization(newUser)).then(() => {
      setTimeout(() => {
        console.log("timeout");
        dispatch(clearCreateUser());
      }, 2000);
    });
  };
  return (
    <>
      <div className="w-full flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 border-r-2 border-gray-200">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h6 className="text-xl left">Add people to your community</h6>
            <h1 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Create User
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            {response.status &&
              (response.status > 201 ? (
                <h2 className="text-center text-2xl tracking-tight font-bold text-white bg-error">
                  Something went wrong
                </h2>
              ) : (
                <h2 className="text-center text-2xl tracking-tight font-normal p-2 rounded-lg text-white bg-[#73aa34]">
                  User created Successfully!
                </h2>
              ))}

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
              <Button type="submit" buttonText="Create User"></Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUserForm;
