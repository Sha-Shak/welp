import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword, editUser } from "../../actions/users.action.js";
import Button from "../Buttons/SubmitButton";
import TextInput from "../Inputs/TextInput";
function EditUserForm() {
  const user = JSON.parse(localStorage.getItem("data"));
  console.log("loop check", user);
  const dispatch = useDispatch();
  const [image, setImage] = useState("");

  const [previewImage, setPreviewImage] = useState("");
  const [url, setUrl] = useState(user.img_url);

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "WelpImages");
    data.append("api_key", "456122925996564");
    data.append("cloud_name", "dgn4bscln4");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dgn4bscln4/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const dataImg = await response.json();
    const getUrl = dataImg.secure_url;
    setUrl(getUrl);
    setPreviewImage(getUrl);
  };

  const [showPasswordBox, setShowPasswordBox] = useState(false);

  const trueShowPasswordBox = () => {
    setShowPasswordBox(true);
  };

  const falseShowPasswordBox = () => {
    setShowPasswordBox(false);
  };

  const [latestFirstname, setLatestFirstname] = useState("");
  const [latestLastname, setLatestLastname] = useState("");
  const [latestBio, setLatestBio] = useState("");
  const [latestLocation, setLatestLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const interestArray = e.target.interest.value.split(",");
    const data = {
      firstname: latestFirstname,
      lastname: latestLastname,
      bio: latestBio,
      interests: interestArray,
      location: latestLocation,
      img_url: url,
    };
    const newData = { ...user, ...data };
    dispatch(editUser(newData)).then(() => {
      e.target.reset();
      setPreviewImage("");
    });
  };
  const handlePassSubmit = (e) => {
    e.preventDefault();
    const data = {
      oldPassword: e.target.oldPassword.value,
      newPassword: e.target.confirmPassword.value,
    };
    console.log("trigger");
    dispatch(changePassword(data));
  };
  return (
    <div className=" justify-center">
      <div className="flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        {showPasswordBox ? (
          <div className="max-w-md w-full ">
            <div
              className="relative cursor-pointer"
              onClick={falseShowPasswordBox}
            >
              <h2 className="absolute left-0 text-xl ">
                <div className=" mr-3 avatar placeholder">
                  <div className="bg-slate-50 p-2 text-neutral-content rounded-full w-9 shadow-xl">
                    <span className="text-indigo-500">{"< "}</span>
                  </div>
                </div>
                Edit Profile
              </h2>
            </div>
            <div className="mt-16">
              <h2 className="mt-10 text-center text-3xl tracking-tight font-bold text-gray-900">
                Change Password
              </h2>
            </div>
            <form
              method="POST"
              onSubmit={handlePassSubmit}
              className="mt-8
            space-y-8"
            >
              <div className="rounded-md shadow-md p-8 ">
                <div className="mx-8">
                  <div className="mb-4">
                    <TextInput
                      id="oldPassword"
                      name="old-password"
                      type="password"
                      required
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-4">
                    <TextInput
                      id="newPassword"
                      name="new-password"
                      type="password"
                      required
                      placeholder="New Password"
                    />
                  </div>
                  <div className="mb-4">
                    <TextInput
                      id="confirmPassword"
                      name="confirm-password"
                      type="password"
                      required
                      placeholder="Confirm Password"
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
              </div>
            </form>
          </div>
        ) : (
          <div className="max-w-md w-full ">
            <div
              className="relative cursor-pointer"
              onClick={trueShowPasswordBox}
            >
              <h2 className="absolute right-0 text-xl ">
                Change Password
                <div className=" ml-3 avatar placeholder">
                  <div className="bg-slate-50 p-2 text-neutral-content rounded-full w-9 shadow-xl">
                    <span className="text-indigo-500">{">"}</span>
                  </div>
                </div>
              </h2>
            </div>
            <div>
              <h2 className="mt-16 text-center text-3xl tracking-tight font-bold text-gray-900">
                Edit User
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <div>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />

                  <button
                    type="button"
                    onClick={uploadImage}
                    className="py-1 px-3 bg-indigo-500 text-white rounded-2xl"
                  >
                    Upload
                  </button>
                </div>
                <div>
                  {previewImage && (
                    <img
                      className="h-40 mt-6 mx-auto"
                      crossOrigin="anonymous"
                      src={previewImage}
                    />
                  )}
                </div>
              </div>
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
                      value={user.firstname}
                      onChange={(e) => setLatestFirstname(e.target.value)}
                    />

                    <TextInput
                      id="lastname"
                      name="lastname"
                      type="text"
                      autocomplete="family-name"
                      required
                      placeholder="Last Name"
                      half
                      value={user.lastname}
                      onChange={(e) => setLatestLastname(e.target.value)}
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
                    onChange={(e) => setLatestBio(e.target.value)}
                    value={user?.bio}
                  />
                </div>
                <div className="mb-4">
                  <TextInput
                    id="location"
                    name="location"
                    type="text"
                    required
                    placeholder="Location"
                    onChange={(e) => setLatestLocation(e.target.value)}
                    value={user?.location}
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
        )}
      </div>
    </div>
  );
}

export default EditUserForm;
