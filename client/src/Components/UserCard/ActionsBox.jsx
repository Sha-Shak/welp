import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { deleteUser, getOtherProfile } from "../../actions/users.action.js";

import { checkChat, createChat } from "../../utils/apiClientService.js";
const dispatch = useDispatch();
  const [deleteBox, setDeleteBox] = useState(false);

  const handleProfile = async (id) => {
    await dispatch(getOtherProfile(id));
    navigate("/profile");
  };
  const navigate = useNavigate();

  const handleConfirmDelete = () => {
    setDeleteBox((prevDeleteBox) => !deleteBox);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  const handleCancel = () => {
    setDeleteBox(false);
  };

const ActionsBox = () => {
  const handleChatClick = (id) => {
    checkChat(id)
      .then((data) => {

        if (data.data === false) {
          createChat(id)
            .then((data) => {

              dispatch({
                type:"SET_CHAT",
                payload : data.data.id
              })
              
              navigate("/chat");
            })
            .catch(() => {
              console.log("Error in createChat");
              navigate("/chat");
            });
        } else {
          dispatch({
            type:"SET_CHAT",
            payload : data.data.id
          })
          navigate("/chat");
        }
      })
      .catch((e) => {
        console.log("Error in checkChat");
        navigate("/chat");
      });
  };
  
  const dummyImage =
    "https://res.cloudinary.com/dgn4bscl4/image/upload/v1660585320/Screenshot_2021-08-07_at_11.35.28_PM_erxssn.png";
  
  
  return (
    <div className={deleteBox && "bg-error p-2 mx-2 rounded" + " card-body"}>
        {deleteBox ? (
          <div>
            <h2 className="card-title text-3xl pb-3 mb-2 mt-3 text-white ">
              Confirm Delete?
            </h2>
            <div className="flex">
              <button
                onClick={(e) => handleDelete(user.id)}
                className="btn bg-white text-error border-r-2 border-gray-light mx-1 rounded-full right-0"
              >
                Delete
              </button>
              <button
                onClick={handleCancel}
                className="btn btn-primary mx-1 rounded-full right-0"
              >
                CANCEL
              </button>
            </div>
          </div>
        ) : (
          <div className="cursor-pointer">
            <div className="cursor-pointer">
              <button
                onClick={(e) => handleProfile(user.id)}
                className="card-title text-2xl border-b-2 border-gray-light mb-1"
              >
                {user.firstname}
                {user.type === "admin" ? (
                  <span class="bg-indigo/50 text-gray-dark text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Admin
                  </span>
                ) : null}
              </button>
            </div>

            <p className="mb-5 ml-5 text-xs">{user.interests.join(", ")}</p>

            <div className="flex">
              <button
                onClick={() => handleChatClick(user.id)}
                className="btn btn-primary mx-1 rounded-full right-0"
              >
                CHAT
              </button>
              {loggedInUser.type === "admin" && (
                <button
                  onClick={handleConfirmDelete}
                  className="btn btn-error mx-1 rounded-full right-0"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        )}
      </div>
  )
}

export default ActionsBox;