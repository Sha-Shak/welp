import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, recommendUsers } from "../actions/users.action.js";
import Banner from "../Components/Banner/Banner";
import UserCard from "../Components/UserCard/UserCard";


function Dashboard() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("data"));


  useEffect(() => {
    // console.log("use effect");
    dispatch(getUsers());
  }, [dispatch]);
  const fetchUsers = useSelector((state) => state.allUsers);

  
  const [userList, setUserList] = useState(fetchUsers);
  console.log("fetch users", fetchUsers);
  useEffect(() => {
    if (user.type === "admin") {
      dispatch(getUsers());
    } else {
      dispatch(recommendUsers());
    }
  }, [userList, dispatch]);


  const orgUsers = fetchUsers.filter((fetchUser) => fetchUser.id !== user.id);
  // const [orgUsers, setOrgUsers] = useState(fetchUsers);
  // console.log("object", orgUsers);
  return (
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
            <button className="btn btn-primary mx-1 rounded-full right-0">
              Add your first user
            </button>
          </div>
        ) : (
          orgUsers.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}

export default Dashboard;
