import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, getOtherProfile } from "../../actions/users.action.js";
import { checkChat, createChat } from "../../utils/apiClientService.js";

const ActionsBox = ({ loggedInUser, user }) => {
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
                type: "SET_CHAT",
                payload: data.data.id,
              });

              navigate("/chat");
            })
            .catch(() => {
              console.log("Error in createChat");
              navigate("/chat");
            });
        } else {
          dispatch({
            type: "SET_CHAT",
            payload: data.data.id,
          });
          navigate("/chat");
        }
      })
      .catch((e) => {
        console.log("Error in checkChat");
        navigate("/chat");
      });
  };

  return (
    <div className={deleteBox && "p-2 mx-2 rounded card-body"}>
      {!deleteBox ? (
        <div className="cursor-pointer">
          <div className="cursor-pointer">
            <button
              onClick={(e) => handleProfile(user.id)}
              className="card-title text-md font-bold border-b-2 border-gray-light mb-1"
            >
              {user.firstname}
              {user.type === "admin" && (
                <span className="bg-indigo/50 text-gray-xlight text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  Admin
                </span>
              )}
            </button>
          </div>
          <div className="flex flex-row justify-between mt-2">
            <div className="bg-gray-xlight p-2 text-neutral-content rounded-full w-12 h-12 border-2 border-main shadow-lg">
              <button onClick={() => handleChatClick(user.id)}>
                <img
                  src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660852523/message_gfibrm.png"
                  height="50px"
                  width="50px"
                  alt="messaging"
                />
              </button>
            </div>
            {loggedInUser.type === "admin" && (
              <div className="flex justify-center mx-1 rounded-full border-2 border-font-red w-12 h-12 right-0">
                <button onClick={handleConfirmDelete}>
                  <BsTrash size={25} className="text-font-red" />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <p className="card-title text-sm font-bold mt-3 mb-3 text-font-red ">
            Confirm Delete?
          </p>
          <div className="flex flex-col text-sm">
            <button
              onClick={(e) => handleDelete(user.id)}
              className="text-sm text-font-red mb-3"
            >
              🗑 Yes, delete.
            </button>
            <button onClick={handleCancel} className="text-sm text-gray">
              🙅‍♀️ No, cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionsBox;
