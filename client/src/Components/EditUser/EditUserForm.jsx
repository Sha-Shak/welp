import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  clearChangePass,
  clearError,
  editUser,
} from "../../actions/users.action.js";
import Button from "../Buttons/SubmitButton";
import TagInput from "../Inputs/TagInput.jsx";
import TextInput from "../Inputs/TextInput";

function EditUserForm() {
  const user = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [image, setImage] = useState("");

  const [previewImage, setPreviewImage] = useState("");
  const [url, setUrl] = useState("");

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);

  const uploadImage = async () => {
    if (url) {
      console.log("true url");
    } else {
      console.log("false url");
    }
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

    await setUrl(getUrl);
    if (url) {
      console.log("11false url", getUrl);
    } else {
      console.log("11true url", getUrl);
    }
    setPreviewImage(getUrl);
  };

  const [showPasswordBox, setShowPasswordBox] = useState(false);

  const trueShowPasswordBox = () => {
    setShowPasswordBox(true);
  };

  const falseShowPasswordBox = () => {
    setShowPasswordBox(false);
  };

  const [latestFirstname, setLatestFirstname] = useState(user.firstname);
  const [latestLastname, setLatestLastname] = useState(user.lastname);
  const [latestBio, setLatestBio] = useState(user.bio);
  const [latestLocation, setLatestLocation] = useState(user.location);
  const [selectedInterest, setSelectedInterest] = useState(user.interests);
  const error = useSelector((state) => state.errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const interestArray = e.target.interest.value.split(", ");
    const data = {
      firstname: latestFirstname,
      lastname: latestLastname,
      bio: latestBio,
      interests: selectedInterest,
      location: latestLocation,
      img_url: url ? url : user.img_url,
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
    dispatch(changePassword(data)).then(() => {
      setTimeout(() => {
        dispatch(clearError());
        dispatch(clearChangePass());
      }, 2000);
    });
    e.target.reset();
  };


  const handleChangePassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    if (pass === confirmPassword)
      setPasswordMatch(true)
    else
      setPasswordMatch(false)
  };

  const handleChangeConfirmPassword = (e) => {
    const cPassword = e.target.value;
    setConfirmPassword(cPassword);

    if (cPassword === password)
      setPasswordMatch(true)
    else
      setPasswordMatch(false)
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
                  <div className="bg-gray-xlight p-2 text-neutral-content rounded-full w-9 shadow-xl">
                    <span className="text-indigo">{"< "}</span>
                  </div>
                </div>
                Edit Profile
              </h2>
            </div>
            <div className="mt-16">
              <h2 className="mt-10 text-center text-3xl tracking-tight font-bold text-indigo">
                Change Password
              </h2>
            </div>
            <form
              method="POST"
              onSubmit={handlePassSubmit}
              className="mt-8
            space-y-8"
            >
              {error && (
                <h2 className="text-center text-2xl tracking-tight font-bold text-white bg-error">
                  {error}
                </h2>
              )}
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
                      onChange={handleChangePassword}
                    />
                  </div>
                  <div className="mb-4">
                    <TextInput
                      id="confirmPassword"
                      name="confirm-password"
                      type="password"
                      required
                      placeholder="Confirm Password"
                      onChange={handleChangeConfirmPassword}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="btn rounded-full bg-gray-xlight text-indigo mr-2"
                    disabled={!passwordMatch}
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
                  <div className="bg-gray-xlight p-2 text-neutral-content rounded-full w-9 shadow-xl">
                    <span className="text-indigo">{">"}</span>
                  </div>
                </div>
              </h2>
            </div>
            <div>
              <h2 className="mt-16 text-center text-3xl tracking-tight font-bold text-indigo">
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
                    className="py-1 px-3 bg-indigo/75 text-gray-xlight rounded-2xl"
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
                      alt="preview"
                    />
                  )}
                </div>
              </div>
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
                      value={latestFirstname}
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
                      value={latestLastname}
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
                    value={latestBio}
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
                    value={latestLocation}
                  />
                </div>
                {/* <div className="mb-4">
                  <TextInput
                    id="interest"
                    name="interest"
                    type="text"
                    required
                    placeholder="Interests"
                  />
                </div> */}

                <div className="mb-4">
                  <TagInput
                    selected={selectedInterest}
                    setSelected={setSelectedInterest}
                  />
                </div>

                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="btn rounded-full bg-gray-xlight text-indigo mr-2"
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
