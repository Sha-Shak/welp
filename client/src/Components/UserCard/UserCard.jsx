import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../actions/users.action.js";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [deleteBox, setDeleteBox] = useState(false);
  console.log("before change deleteBox val is", deleteBox);

  const handleConfirmDelete = () => {
    console.log("Confirm delete? ");
    setDeleteBox((prevDeleteBox) => !deleteBox);
    console.log("deleteBox val is", deleteBox);
  };
  const handleDelete = (id) => {
    console.log("from compo: ", id);
    dispatch(deleteUser(id));
  };
  const handleCancel = () => {
    setDeleteBox(false);
  };
  const dummyImage =
    "https://res.cloudinary.com/dgn4bscl4/image/upload/v1660585320/Screenshot_2021-08-07_at_11.35.28_PM_erxssn.png";
  return (
    <div className="card border-2 card-side bg-base-100 shadow-xl p-2 my-2">
      <figure>
        <img
          className="rounded-full w-36 h-36"
          src={!user.img_url ? dummyImage : user.img_url}
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
          <div>
            <h2 className="card-title text-2xl border-b-2 border-gray-200 mb-1 ">
              {user.firstname}
            </h2>
            {user.interest &&
              user.interest.map((interest) => <p>{interest}</p>)}

            <div className="flex">
              <button className="btn btn-primary mx-1 rounded-full right-0">
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
