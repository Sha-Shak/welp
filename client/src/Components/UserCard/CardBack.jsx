import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import { deleteUser, getOtherProfile } from "../../actions/users.action.js";
import { checkChat, createChat } from "../../utils/apiClientService.js";
import ActionsBox from "./ActionsBox.jsx";

const CardBack = ({ loggedInUser, user }) => {

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

  const tempAvatar = createAvatar(style, {
    seed: 'custom-seed',
  });

  const dummyImage =
    "https://res.cloudinary.com/dgn4bscl4/image/upload/v1660585320/Screenshot_2021-08-07_at_11.35.28_PM_erxssn.png";

  return (
    <div className="card border-2 border-gray-xlight card-side bg-base-100 shadow-xl p-2 my-2 w-300 h-300">
      <figure>
        <img
          className="rounded-full w-32 h-32 p-2"
          src={!user.img_url ? dummyImage : user.img_url}
          alt="propic"
        />
      </figure>
      <ActionsBox 
        loggedInUser={loggedInUser}
        user={user}
      />
    </div>
  );
};

export default CardBack;
