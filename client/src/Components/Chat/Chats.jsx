import React from "react";

function Chats() {
  return (
    <div>
      <div>
        <div className="h-screen w-50 bg-gray-300">
          <div className="flex items-center h-screen">
            <div className="w-100 h-100 bg-white rounded shadow-2xl">
              <nav className="w-full h-20 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center"></nav>

              <div
                className="overflow-auto px-1 py-1"
                style={{ height: "67vh" }}
                id="journal-scroll"
              >
                <div className="flex items-center pr-10">
                  <span
                    className="flex ml-1  h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-7 p-8 items-end"
                    style={{ fontSize: "30px" }}
                  >
                    <img
                      src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"
                      className="rounded-full shadow-xl"
                      width="40"
                      height="40"
                      alt="propic"
                    />
                    <span className="px-7">John Doe</span>
                    <br />

                    <div
                      className="text-gray-400 pl-6"
                      style={{ fontSize: "16px" }}
                    >
                      01:25am
                    </div>
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center p-1 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
