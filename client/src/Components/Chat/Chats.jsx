import React from "react";

function Chats() {
  return (
    <div className="h-screen w-1/3">
      <div className="flex items-center h-100">
        <div className="w-100 h-100 bg-white rounded shadow-2xl">
          <nav className="w-full h-20 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
            <div className="flex justify-between items-center p-5 ">
              <div className="relative">
                <i
                  className="mdi mdi-emoticon-excited-outline absolute top-1 left-1 text-gray-400"
                  style={{
                    fontSize: " 17px !important",
                    fontWeight: "bold",
                  }}
                ></i>
                <input
                  type="text"
                  className="rounded-full pl-6 pr-12 py-2 focus:outline-none  h-auto placeholder-black bg-white text-black"
                  style={{ fontSize: "1rem", width: "100%" }}
                  placeholder="Search..."
                  id="typemsg"
                />
                <i className="mdi mdi-paperclip absolute right-8 top-1 transform -rotate-45 text-gray-400"></i>
                <i className="mdi mdi-camera absolute right-2 top-1 text-gray-400"></i>
              </div>
            </div>
          </nav>

          <div
            className="overflow-auto px-1 py-1"
            style={{ height: "70vh" }}
            id="journal-scroll"
          >
            <div className="flex p-[1rem]">
              <span className="flex ml-1 items-center  h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-7 p-8 ">
                <img
                  src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"
                  className="rounded-full shadow-xl"
                  width="70"
                  height="70"
                  alt="propic"
                />
                <div className="">
                  <div className="px-7 text-xl">John Doe</div>

                  <div
                    className="text-gray-400 pl-6"
                    style={{ fontSize: "16px" }}
                  >
                    01:25am
                  </div>
                </div>
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center p-1 "></div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
