import React from "react";

const TopBar = () => {
  return (
    <div data-theme="light" className="mx-5 self-end p-4 pr-0">
      <div className=" avatar mr-1 placeholder ">
        <div className=" bg-slate-300  text-neutral-content rounded-full w-8 shadow-lg">
          <span className="text-xl text-black">L</span>
        </div>
      </div>
      <div className="avatar ml-1 placeholder ">
        <div className=" text-neutral-content rounded-full w-8 shadow-lg bg-slate-300">
          <span className="text-xl text-black">U</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
