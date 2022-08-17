import React from "react";

function ChatWindow() {
  return (
    <div className="mx-3">
      <div className="">
        <div className="h-100 w-100 flex items-center">
          <div className="w-100 h-100 bg-white rounded shadow-2xl">
            <nav className="w-full h-20 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
              <div className="flex justify-center items-center">
                <i className="mdi mdi-arrow-left font-normal text-gray-300 ml-1"></i>
                <img
                  src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"
                  className="rounded-full ml-1"
                  width="70"
                  height="70"
                  alt="propic"
                />
                <span className="text-xl font-medium text-gray-300 ml-1">
                  Alex cairo
                </span>
              </div>

              <div className="flex items-center">
                <i className="mdi mdi-video text-gray-300 mr-4"></i>
                <i className="mdi mdi-phone text-gray-300 mr-2"></i>
                <i className="mdi mdi-dots-vertical text-gray-300 mr-2"></i>
              </div>
            </nav>

            <div
              className="overflow-auto px-1 py-1"
              style={{ height: "65vh" }}
              id="journal-scroll"
            >
              <div className="flex items-center pr-10">
                <img
                  src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"
                  className="rounded-full shadow-xl"
                  width="40"
                  height="40"
                  alt="propic"
                />
                <span
                  className="flex ml-1  h-auto bg-gray-900 text-gray-200 font-normal rounded-sm px-3 p-4 items-end"
                  style={{ fontSize: "1rem" }}
                >
                  Hi Dr.Hendrikson, I haven't been feeling well for past few
                  days.{" "}
                  <span
                    className="text-gray-400 pl-3"
                    style={{ fontSize: "1rem" }}
                  >
                    01:25am
                  </span>
                </span>
              </div>

              <div className="flex justify-end pt-2 pl-10">
                <span
                  className="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-3 p-4 items-end flex justify-end "
                  style={{ fontSize: "1rem" }}
                >
                  Lets jump on a video call.{" "}
                  <span
                    className="text-gray-400 pl-3"
                    style={{ fontSize: "16px" }}
                  >
                    02.30am
                  </span>
                </span>
              </div>

              <div className="flex justify-center">
                <span
                  className="text-gray-500 text-s pt-3"
                  style={{ fontSize: "1rem" }}
                >
                  Call started at 02:33 am
                </span>
              </div>
              <div className="flex justify-center">
                <span
                  className="text-gray-500 text-s pt-3"
                  style={{ fontSize: "1rem" }}
                >
                  Call ended at 02:33 am
                </span>
              </div>

              <div className=" " id="chatmsg"></div>
            </div>

            <div className="flex justify-between items-center p-5 ">
              <div className="relative">
                <i
                  className="mdi mdi-emoticon-excited-outline absolute top-1 left-1 text-gray-400"
                  style={{ fontSize: " 17px !important", fontWeight: "bold" }}
                ></i>
                <input
                  type="text"
                  className="rounded-full pl-6 pr-12 py-2 focus:outline-none  h-auto placeholder-gray-100 bg-gray-900 text-white"
                  style={{ fontSize: "1rem", width: "100%" }}
                  placeholder="Type a message..."
                  id="typemsg"
                />
                <i className="mdi mdi-paperclip absolute right-8 top-1 transform -rotate-45 text-gray-400"></i>
                <i className="mdi mdi-camera absolute right-2 top-1 text-gray-400"></i>
              </div>
              <div className="w-7 h-7 rounded-full bg-blue-300 text-center items-center flex justify-center hover:bg-gray-900 hover:text-white">
                <i className="mdi mdi-microphone "></i>
              </div>
              <div className="w-7 h-7 rounded-full bg-blue-300 text-center items-center flex justify-center">
                <button className="w-7 h-7 rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-gray-900 hover:text-white">
                  <i className="mdi mdi-send "></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
