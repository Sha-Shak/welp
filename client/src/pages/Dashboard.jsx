import React from "react";
import Banner from "../Components/Banner/Banner";
import Sidebar from "../Components/Sidebar/Sidebar";
import TopBar from "../Components/TopBar/TopBar";

function Dashboard() {
  const users = [
    {
      name: "Alesandro",
      interest: ["Football", "Code", "CS"],
      profilePic:
        "https://res.cloudinary.com/dgn4bscl4/image/upload/v1660585320/Screenshot_2021-08-07_at_11.35.28_PM_erxssn.png",
    },
    {
      name: "Xavier",
      interest: ["Traveling", "Sports", "CS"],
      profilePic:
        "https://res.cloudinary.com/dgn4bscl4/image/upload/v1660585320/Screenshot_2021-08-07_at_11.35.28_PM_erxssn.png",
    },

    {
      name: "William",
      interest: ["Movies", "Code", "CS"],
      profilePic:
        "https://res.cloudinary.com/dgn4bscl4/image/upload/v1660585320/Screenshot_2021-08-07_at_11.35.28_PM_erxssn.png",
    },

    {
      name: "Alex",
      interest: ["Cars", "Code", "CS"],
      profilePic:
        "https://res.cloudinary.com/dgn4bscl4/image/upload/v1660585320/Screenshot_2021-08-07_at_11.35.28_PM_erxssn.png",
    },
  ];
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full self-end ">
          <TopBar />
          <Banner />

          <h3 className="text-3xl mt-3 mb-3 pb-2 border-b-2 border-gray-100">
            Organization User
          </h3>
          <div className="mt-1 ml-16 flex flex-wrap justify-evenly">
            {users.map((user) => (
              <div class="card border-2 card-side bg-base-100 shadow-xl p-2 my-2">
                <figure>
                  <img
                    className="rounded-full w-36 h-36"
                    src={user.profilePic}
                    alt="profile-picture"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title text-2xl border-b-2 border-gray-200">
                    {user.name}
                  </h2>
                  <p>JavaScript, Code, CS</p>
                  <div className="flex">
                    <button class="btn btn-primary mx-1 rounded-full right-0">
                      CHAT
                    </button>
                    <button class="btn btn-error mx-1 rounded-full right-0">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
