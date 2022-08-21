import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, recommendUsers } from "../actions/users.action.js";
import Banner from "../Components/Banner/Banner";
import Sidebar from "../Components/Sidebar/Sidebar.jsx";
import TopBar from "../Components/TopBar/TopBar.jsx";
import UserCard from "../Components/UserCard/UserCard";

function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("useEFFECT");
    if (!user) navigate("/login");
  }, [user]);
  // useEffect(() => {
  //   if (!user.id) {
  //     console.log("no user");
  //     navigate("/login");
  //   }
  // }, [user]);
  useEffect(() => {
    if (user.type === "admin") {
      dispatch(getUsers());
    } else {
      dispatch(recommendUsers());
    }
  }, [dispatch]);
  const fetchUsers = useSelector((state) => state.allUsers);

  const [userList, setUserList] = useState(fetchUsers);

  const orgUsers = fetchUsers.filter((fetchUser) => fetchUser.id !== user.id);
  // const [orgUsers, setOrgUsers] = useState(fetchUsers);
  console.log("map object", orgUsers);
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <TopBar />
        <div className="container mx-auto">
          <div data-theme="light">
            <Banner user={user} />
            <h1 className="text-3xl mt-3 mb-3 pb-2 border-b-2 border-gray-100">
              Organization User
            </h1>
            <div className="mt-1 flex flex-wrap  justify-evenly">
              {!orgUsers.length ? (
                <div>
                  <h2 className="text-dark text-3xl mt-16 mb-10 items-center">
                    You don't have any users yet
                  </h2>
                  {user.type === "admin" ? (
                    <Link to="/add-user">
                      <button className="btn btn-primary mx-1 rounded-full right-0">
                        Add your first user
                      </button>
                    </Link>
                  ) : null}
                </div>
              ) : (
                orgUsers.map((orgUser) => (
                  <UserCard
                    key={orgUser.id}
                    loggedInUser={user}
                    user={orgUser}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
