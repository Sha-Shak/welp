import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { deleteUser, getOtherProfile } from "../../actions/users.action.js";

import { checkChat, createChat } from "../../utils/apiClientService.js";


const UserCard = ({ user }) => {
  console.log();
  const dispatch = useDispatch();
  const [deleteBox, setDeleteBox] = useState(false);
  const handleProfile = async (id) => {
    await dispatch(getOtherProfile(id));
    navigate("/profile");
  };
  const navigate = useNavigate();
  // console.log("before change deleteBox val is", deleteBox);

  const handleConfirmDelete = () => {
    // console.log("Confirm delete? ");
    setDeleteBox((prevDeleteBox) => !deleteBox);
    // console.log("deleteBox val is", deleteBox);
  };

  const handleDelete = (id) => {
    // console.log("from compo: ", id);
    dispatch(deleteUser(id));
  };

  const handleCancel = () => {
    setDeleteBox(false);
  };

  const handleChatClick = (id) => {

    navigate(`/chat/` + id);
  };


    // dispatch({
    //   type: "SET_CHAT",
    //   payload : id
    // })
      checkChat(id)
        .then(data => {
          console.log('From handleChatClick: ', data.data);
          if(data.data === false) {
            createChat(id)
              .then(() => {
                navigate('/chat')}
                )
              .catch(() =>{
                console.log('Error in createChat');
                navigate('/chat');
              } )
          } else {
            navigate('/chat');
          }
        })
        .catch((e)=>{
          console.log('Error in checkChat');
          navigate('/chat');
        });

      

  

  const dummyImage =
    "https://res.cloudinary.com/dgn4bscl4/image/upload/v1660585320/Screenshot_2021-08-07_at_11.35.28_PM_erxssn.png";
  return (
    <div className="card border-2 card-side bg-base-100 shadow-xl p-2 my-2">
      <figure>
       
        <img
          className="rounded-full w-36 h-36"
          src={!user.img_url ? dummyImage : user.img_url}
          alt="propic"
        />
      </figure>
      <div className="card-body">
        {deleteBox ? (
          <div>
            <h2 className="card-title text-3xl pb-3 ">Confirm Delete?</h2>
            <div className="flex">
              <button
                onClick={handleCancel}
                className="btn btn-primary mx-1 rounded-full right-0"
              >
                CANCEL
              </button>
              <button
                onClick={(e) => handleDelete(user.id)}
                className="btn btn-error mx-1 rounded-full right-0"
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div onClick={(e) => handleProfile(user.id)}>
            <h2 className="card-title text-2xl border-b-2 border-gray-200 mb-1 ">
              {user.firstname}
            </h2>
            {user.interest &&
              user.interest.map((interest) => <p>{interest}</p>)}

            <div className="flex">
              <button
                onClick={() => handleChatClick(user.id)}
                className="btn btn-primary mx-1 rounded-full right-0"
              >
                CHAT
              </button>
              <button
                onClick={handleConfirmDelete}
                className="btn btn-error mx-1 rounded-full right-0"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
