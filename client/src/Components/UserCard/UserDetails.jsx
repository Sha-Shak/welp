import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, getOtherProfile } from "../../actions/users.action.js";
import { checkChat, createChat } from "../../utils/apiClientService.js";

const UserDetails = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleProfile = async (id) => {
    dispatch(getOtherProfile(id));
    navigate("/profile");
  };
  
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
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h2
          onClick={(e) => handleProfile(user.id)}
          className="card-title text-2xl border-b-2 border-gray-light mb-1 "
        >
          {user.firstname}
          {user.type === "admin" ? (
            <span class="bg-indigo/50 text-gray-dark text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              Admin
            </span>
          ) : null}
        </h2>
        <div className="bg-gray-xlight p-2 text-neutral-content
          rounded-full w-12 h-12 border-2
          border-main shadow-lg">
          <button
            onClick={() => handleChatClick(user.id)}
          >
            <img
              src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660852523/message_gfibrm.png"
              height="50px"
              width="50px"
              alt="messaging"
            />
          </button>
        </div>
      </div>
      <div className="py-2">
        <p className="mb-5 ml-5 text-xs">{user.interests.join(", ")}</p>
      </div>

    </div>
  )
}

export default UserDetails