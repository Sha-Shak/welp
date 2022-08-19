import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getOwnProfile, logOut } from "../../actions/users.action.js";
const TopBar = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const [stateUser, setStateUser] = useState(user);
  // useEffect(() => {
  //   setStateUser(user);
  // }, [user]);
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
          {" "}
          {user.type === "admin" && (
            <Link to="/add-user">
              <button
                type="submit"
                className="py-1 px-2 mr-1 rounded-2xl  bg-indigo-600 text-white"
              >
                Add User
              </button>
            </Link>
          )}
          <div onClick={handleLogOut} className=" mr-1 avatar placeholder">
            <div className="bg-slate-50 p-2 text-neutral-content rounded-full w-9 shadow-xl">
              <img src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660852523/logout_fasmjv.png" />
            </div>
          </div>
          <div className="ml-1 avatar placeholder">
            <div
              onClick={handleClick}
              className="bg-indigo-500 text-white p-2 rounded-full w-9 shadow-xl"
            >
              <span className="text-xl text-white cursor-pointer">
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
