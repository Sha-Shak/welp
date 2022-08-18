import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOwnProfile, logOut } from "../../actions/users.action.js";
const TopBar = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const [stateUser, setStateUser] = useState(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("topbar", stateUser);
  const handleClick = async () => {
    await dispatch(getOwnProfile());
    navigate("/edit-user");
  };
  const handleLogOut = () => {
    dispatch(logOut());
    setStateUser(null);
    navigate("/login");
  };
  return (
    <div data-theme="light" className="p-4 flex justify-end items-center">
      {stateUser ? (
        <div>
          <div onClick={handleLogOut} className=" mr-1 avatar placeholder">
            <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
              <span className="text-xl text-black cursor-pointer">L</span>
            </div>
          </div>
          <div className="ml-1 avatar placeholder">
            <div
              onClick={handleClick}
              className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg"
            >
              <span className="text-xl text-black cursor-pointer">
                {user && user.firstname.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <button className="btn btn-primary mx-1 rounded-full right-0">
          Log In
        </button>
      )}
    </div>
  );
};

export default TopBar;
