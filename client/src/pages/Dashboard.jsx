import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader.js";
import { getUsers, recommendUsers } from "../actions/users.action.js";
import Banner from "../Components/Banner/Banner";
import Sidebar from "../Components/Sidebar/Sidebar.jsx";
import TopBar from "../Components/TopBar/TopBar.jsx";
import CardFlip from "../Components/UserCard/CardFlip.jsx";

function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user.id) {
      navigate("/login");
    }
  }, [user]);
  const isLoading = useSelector((state) => state.loader);
  // console.log("in comp from reducer", isLoading);
  const [loader, setLoader] = useState(isLoading);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);
  // useEffect(() => {
  //   if (!user.id) {
  //     console.log("no user");
  //     navigate("/login");
  //   }
  // }, [user]);

  useEffect(() => {
    // console.log("first loader", loader);
    setTimeout(() => setLoader(false), 4000);
    // console.log("second loader", loader);
  }, []);

  useEffect(() => {
    if (user.type === "admin") {
      dispatch(getUsers());
    } else {
      dispatch(recommendUsers());
    }
  }, [dispatch, user.type]);
  const fetchUsers = useSelector((state) => state.allUsers);
  const orgUsers = fetchUsers.filter((fetchUser) => fetchUser.id !== user.id);
  // const [orgUsers, setOrgUsers] = useState(fetchUsers);

  return (
    <div className={loader ? "flex h-screen items-center" : ""}>
      {loader ? (
        <HashLoader color="#125ec0" cssOverride={override} size={150} />
      ) : (
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <TopBar />
            <div className="container mx-auto">
              <div data-theme="light">
                <Banner user={user} />
                <div className="flex flex-col items-center border-b-2 border-gray-light">
                  <h1 className="text-3xl text-indigo mt-3 mb-3 pb-2 border-b-2 border-gray-xlight">
                    {user && user.type === "admin"
                      ? "Organization Members"
                      : "Suggestions"}
                  </h1>
                  {user &&
                    user.type !== "admin" &&
                    user.interests.length < 1 && (
                      <h2 className="text-l text-gray mt-3 mb-3 pb-2 border-b-2 border-gray-xlight">
                        Add more interests to improve suggestions.
                      </h2>
                    )}
                </div>
                <div className="mt-1 flex flex-wrap  justify-evenly">
                  {orgUsers && !orgUsers.length ? (
                    <div className="flex flex-col items-center">
                      <h2 className="text-gray text-3xl mt-16 mb-10 items-center">
                        Your organization doesn't have any new users.
                      </h2>
                      {user && user.type === "admin" ? (
                        <Link to="/add-user">
                          <button className="btn btn-primary mx-1 rounded-full right-0">
                            Add your first user
                          </button>
                        </Link>
                      ) : null}
                    </div>
                  ) : (
                    orgUsers.map((orgUser) => (
                      <CardFlip
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
      )}
    </div>
  );
}

export default Dashboard;
