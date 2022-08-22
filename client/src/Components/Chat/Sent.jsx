import React from 'react'
import { getTime } from './services'

function Sent({ content, timestamp }) {

  const time = getTime(timestamp);
  
  return (
    <div>
        <div className="flex justify-end pt-2 p-[1rem]">
                <span
                  className="bg-main h-auto text-white text-md font-normal rounded-sm px-3 p-4 items-end flex justify-end "
                  style={{ fontSize: "1rem",color:"white" }}
                >
                  {content}{" "}
                  <span
                    className="text-white pl-3"
                    style={{ fontSize: "13px" }}
                  >
                    {time}
                  </span>
                </span>
              </div>
    </div>
  )
}

export default Sent