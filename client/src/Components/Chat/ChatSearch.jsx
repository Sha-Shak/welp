import { Action } from 'history';
import React from 'react';
import {useDispatch} from 'react-redux';

function ChatSearch() {
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch({
      type: 'SET_SEARCH_INPUT',
      payload : e.target.value
    })
  }

  return (
    <div>
        <nav className="w-full h-20 bg-white rounded-tr rounded-tl flex justify-between items-center">
            <div className="w-full flex justify-between items-center p-5 ">
              <div className="w-full relative">
              
                <input
                  type="text"
                  className="border-2 border-gray-xlight rounded-full pl-6 pr-12 py-2 focus:outline-none  h-auto placeholder-black bg-white text-black"
                  style={{ fontSize: "1rem", width: "100%" }}
                  placeholder="Search..."
                  onChange={handleChange}
                  id="typemsg"
                />
              
              </div>
            </div>
          </nav>
    </div>
  )
}

export default ChatSearch