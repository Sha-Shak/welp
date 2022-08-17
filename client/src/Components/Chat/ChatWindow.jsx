import React from "react";
import Call from "./Call";
import './chat.css'
import Receiver from "./Receiver";
import Sender from "./Sender";

function ChatWindow() {

  return (
    <div className="relative h-90vh mr-6 w-2/3">
   
        <div className="w-100 h-90vh flex items-center">
          <div className="h-90vh w-full bg-white rounded shadow-2xl">
            <nav className="h-20 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
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
              style={{ height: "67vh" }}
              id="journal-scroll"
            >
                <Receiver/>
                <Sender/>
                <Call/>
              

              

              <div className=" " id="chatmsg"></div>
            </div>

            <div className="absolute w-full bottom-0 items-center flex justify-between p-2 ">
              
                  <div className="relative w-full m-3">
                  
                    <input
                      type="text"
                      className="rounded-full pl-6 pr-12 py-2 focus:outline-none  h-auto placeholder-gray-100 bg-gray-900 text-white"
                      style={{ fontSize: "1rem", width: "100%" }}
                      placeholder="Type a message..."
                      id="typemsg"
                    />
                
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
  );
}

export default ChatWindow;
