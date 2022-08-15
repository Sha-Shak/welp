import React from "react";

const Sidebar = () => {
  return (
    <div className=" fixed justify-around top-0 h-screen w-16 flex flex-col border-r-2 bg-slate-100 text-black shadow-lg">
      <div className="s h-1/3">
        <div className=" avatar placeholder">
          <div className=" bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
            <span className="text-xl text-black">W!</span>
          </div>
        </div>
      </div>
      <div className="h-1/3 flex flex-col justify-between">
        <div className=" avatar placeholder">
          <div className=" bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
            <span className="text-xl text-black">H</span>
          </div>
        </div>
        <div className=" avatar placeholder ">
          <div className=" bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
            <span className="text-xl text-black">M</span>
          </div>
        </div>
        <div className=" avatar   placeholder ">
          <div className=" bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
            <span className="text-xl text-black">C</span>
          </div>
        </div>
      </div>
      <div className="h-1/3 relative">
        <div className=" avatar placeholder absolute bottom-0">
          <div className=" bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
            <span className="text-xl text-black">L</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
