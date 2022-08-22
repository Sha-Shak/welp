import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getOwnProfile, logOut } from "../../actions/users.action.js";
const TopBar = () => {
  const user = useSelector((state) => state.auth);
  const [stateUser, setStateUser] = useState();

  //for reference================
  // useEffect(
  //   function runAfterIntialRenderAndOnDependecyChange() {
  //     console.log("after", user);
  //     console.log("EFFECT");

  //     setStateUser(user);
  //   },
  //   [user]
  // );
  useEffect(() => {
    setStateUser(user);
  }, [user]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    await dispatch(getOwnProfile());
    navigate("/edit-user");
  };

  const handleLogOut = () => {
    dispatch(logOut());
    setStateUser(null);
    navigate("/login");
  };

  console.log(user)

  return (
    <div
      data-theme="light"
      className="p-4 flex justify-end items-center sticky top-0 z-10 drop-shadow-lg"
    >
      {user ? (
        <div className="flex justify-end">
          {user.type === "admin" && (
            <div className="flex justify-end">
              <Link to="/add-user">
                <button
                  type="submit"
                  className="py-1 px-2 mr-3 rounded-2xl border border-prpl-button bg-prpl-button text-gray-xlight"
                >
                  Add User
                </button>
              </Link>
              <Link to="/add-admin">
                <button
                  type="submit"
                  className="py-1 px-2 mr-3 rounded-2xl border-prpl-button bg-prpl-button text-gray-xlight"
                >
                  Add Admin
                </button>
              </Link>
            </div>
          )}
          <div onClick={handleLogOut} className=" mr-1 avatar placeholder">
            <div className="bg-gray-xlight p-2 mr-3 text-neutral-content rounded-full w-9 shadow-xl cursor-pointer">
              <img src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660852523/logout_fasmjv.png" alt="logout"/>
            </div>
          </div>
          <div className="ml-1 avatar placeholder">
            <div
              onClick={handleClick}
              className="bg-indigo-500 text-white rounded-full w-9 shadow-xl cursor-pointer"
            >
              {user && user.img_url ? (
                <img
                  className="rounded-full"
                  src={user.img_url}
                  alt="user-pro-pic"
                />
              ) : (
                <span className="text-xl text-white cursor-pointer">
                  {user && user.firstname.charAt(0)}
                </span>
              )}
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
