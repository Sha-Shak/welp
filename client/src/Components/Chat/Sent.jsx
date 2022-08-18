import React from 'react'
import { getTime } from './services'

function Sent({ content, timestamp }) {

  const time = getTime(timestamp);
  
  return (
    <div>
        <div className="flex justify-end pt-2 p-[1rem]">
                <span
                  className="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-3 p-4 items-end flex justify-end "
                  style={{ fontSize: "1rem" }}
                >
                  {content}{" "}
                  <span
                    className="text-gray-400 pl-3"
                    style={{ fontSize: "16px" }}
                  >
                    {time}
                  </span>
                </span>
              </div>
    </div>
  )
}

export default Sent