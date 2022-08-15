import React from "react";
import Banner from "../Components/Banner/Banner";
import Sidebar from "../Components/Sidebar/Sidebar";
import TopBar from "../Components/TopBar/TopBar";

function dashboard() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full self-end ">
          <TopBar />
          <Banner />
        </div>
        <div className="cards flex">
          <div className=" card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
