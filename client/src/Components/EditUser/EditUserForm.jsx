import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../actions/users.action.js";
import Button from "../Buttons/SubmitButton";
import TextInput from "../Inputs/TextInput";
function EditUserForm() {
  const user = JSON.parse(localStorage.getItem("data"));
  console.log("loop check", user);
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [url, setUrl] = useState(user.img_url);
  const handleShowBtn = () => {
    setShowBtn(true);
  };
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const interestArray = e.target.interest.value.split(",");
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      bio: e.target.bio.value,
      interests: interestArray,
      location: e.target.location.value,
      img_url: url,
    };
    const newData = { ...user, ...data };
    dispatch(editUser(newData)).then(() => {
      e.target.reset();
      setPreviewImage("");
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
            <div>
              <div>
                <input
                  type="file"
                  onClick={handleShowBtn}
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {showBtn && (
                  <button
                    type="button"
                    onClick={uploadImage}
                    className="py-1 px-3 bg-indigo-500 text-white rounded-2xl"
                  >
                    Upload
                  </button>
                )}
              </div>
              <div>
                <img crossOrigin="anonymous" src={previewImage} />
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
              {
                // <div className="mb-4">
                //   <TextInput
                //     id="password"
                //     name="password"
                //     type="password"
                //     autocomplete="off"
                //     required
                //     placeholder="Password"
                //   />
                // </div>
              }

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
