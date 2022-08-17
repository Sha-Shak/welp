import React from 'react'
import {useDispatch} from 'react-redux';


function ChatInput() {
  return (
    <div>
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
  )
}

export default ChatInput